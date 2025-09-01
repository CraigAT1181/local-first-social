import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Home
      </ThemedText>
      <Spacer />
      <Link href="/login">
        <ThemedText>Login</ThemedText>
      </Link>
      <Spacer />
      <Link href="/register">
        <ThemedText>Register</ThemedText>
      </Link>
      <Spacer />
      <Link href="/neighbourhood">
        <ThemedText>Neighbourhood Feed</ThemedText>
      </Link>
      <Spacer />
      <Link href="/profile">
        <ThemedText>Your Profile Page</ThemedText>
      </Link>
      <Spacer />
      <Link href="/town">
        <ThemedText>Town Feed</ThemedText>
      </Link>
      <Link href="/books">
        <ThemedText>Books</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
