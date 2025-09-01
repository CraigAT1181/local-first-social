import { StyleSheet, FlatList, Pressable, Text } from "react-native";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import Spacer from "../../../components/Spacer";
import { useBooks } from "../../../hooks/useBooks";
import { useRouter } from "expo-router";
import ThemedButton from "../../../components/ThemedButton";
import { Colours } from "../../../constants/colours";

const ReadingList = () => {
  const { books } = useBooks();

  const router = useRouter();
  return (
    <ThemedView style={styles.container} safe={true}>
      {!books.length && (
        <>
          <ThemedText style={styles.title}>
            Your reading list is empty
          </ThemedText>
          <Spacer />
          <ThemedButton
            onPress={() => router.replace("/create")}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Add a Book
            </Text>
          </ThemedButton>
        </>
      )}
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            <ThemedText>Written by: {item.author}</ThemedText>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

export default ReadingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: { marginTop: 40 },
  btn: {
    marginTop: 40,
    backgroundColor: Colours.primary,
    width: 200,
    alignSelf: "center",
  },
});
