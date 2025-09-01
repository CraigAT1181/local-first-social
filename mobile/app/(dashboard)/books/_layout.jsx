import { Stack } from "expo-router";

export default function BooksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="readinglist"
        options={{ title: "Your Reading List", headerTitleAlign: "center" }}
      />
      <Stack.Screen name="[id]" options={{ title: "Book" }} />
    </Stack>
  );
}
