import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "68b1ba76000c93b1075c";
const TABLE_ID = "books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
        Query.equal("userid", user.$id),
      ]);

      setBooks(response.documents);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        { ...data, userid: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      // setBooks((prevBooks) => [newBook, ...prevBooks]); -- could also simply use optimistic rendering
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      response = await databases.getDocument(DATABASE_ID, TABLE_ID, id);

      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(DATABASE_ID, TABLE_ID, id);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${TABLE_ID}.documents`;
    // `databases.${DATABASE_ID}.tables.${TABLE_ID}.rows`, -- could future proof by adding array of channels
    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, ({ payload, events }) => {
        const isCreate = events.some((e) => e.endsWith(".create"));
        const isDelete = events.some((e) => e.endsWith(".delete"));

        if (isCreate) {
          setBooks((prevBooks) => [payload, ...prevBooks]);
        } else if (isDelete) {
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.$id !== payload.$id)
          );
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, createBook, fetchBookById, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
