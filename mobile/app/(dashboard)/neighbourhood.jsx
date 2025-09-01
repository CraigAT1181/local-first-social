import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Neighbourhood = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title} title={true}>
        Neighbourhood Feed
      </ThemedText>
    </ThemedView>
  );
};

export default Neighbourhood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // textAlign: "center",
  },
});
