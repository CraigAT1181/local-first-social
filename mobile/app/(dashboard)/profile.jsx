import { StyleSheet } from "react-native";

import { useUser } from "../../hooks/useUser";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title} title={true}>
        {user.email}
      </ThemedText>

      <ThemedButton onPress={logout}>
        <ThemedText>Log out</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

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
