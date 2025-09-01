import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Town = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title} title={true}>
        Town Feed
      </ThemedText>
    </ThemedView>
  );
};

export default Town;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
