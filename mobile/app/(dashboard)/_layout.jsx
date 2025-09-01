import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colours } from "../../constants/colours";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colourScheme = useColorScheme();

  const theme = Colours[colourScheme] ?? Colours.light;

  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 100,
          },
          tabBarActiveTintColor: theme.iconColourFocused,
          tabBarInactiveTintColor: theme.iconColour,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "person" : "person-outline"}
                color={focused ? theme.iconColourFocused : theme.iconColour}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="neighbourhood"
          options={{
            title: "Neighbourhood",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "home" : "home-outline"}
                color={focused ? theme.iconColourFocused : theme.iconColour}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="town"
          options={{
            title: "Town",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "business" : "business-outline"}
                color={focused ? theme.iconColourFocused : theme.iconColour}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "book" : "book-outline"}
                color={focused ? theme.iconColourFocused : theme.iconColour}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "pencil" : "pencil-outline"}
                color={focused ? theme.iconColourFocused : theme.iconColour}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="books/[id]"
          options={{
            href: null,
          }}
        /> */}
      </Tabs>
    </UserOnly>
  );
};

export default DashboardLayout;
