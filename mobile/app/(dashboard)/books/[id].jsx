import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";

//Themed Components
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import ThemedButton from "../../../components/ThemedButton";
import Spacer from "../../../components/Spacer";
import ThemedLoader from "../../../components/ThemedLoader";
import { Colours } from "../../../constants/colours";

const BookDetails = () => {
  const [book, setBook] = useState(null);

  const { id } = useLocalSearchParams();

  const { fetchBookById, deleteBook } = useBooks();

  const router = useRouter();
  const navigation = useNavigation();

  const handleDelete = async () => {
    await deleteBook(id);
    router.back();
    setBook(null);
  };

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);

      setBook(bookData);
    }

    loadBook();
    console.log("book", book);
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: book?.title ?? "Unknown Title" });
  }, [book?.title, navigation]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText style={styles.title}>{book.title}</ThemedText>
      <Spacer />
      <ThemedText style={styles.text}>Written by: {book.author}</ThemedText>
      <Spacer />
      <ThemedText style={styles.title}>Book Description:</ThemedText>
      <Spacer height={10} />
      <ThemedText style={styles.text}>{book.description}</ThemedText>
      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colours.warning,
    width: 200,
    alignSelf: "center",
  },
});
