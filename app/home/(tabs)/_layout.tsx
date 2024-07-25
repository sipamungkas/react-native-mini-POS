import { router, Tabs } from "expo-router";
import {
  History,
  LayoutDashboard,
  NotepadText,
  Star,
} from "lucide-react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const HomeTabLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <LayoutDashboard
                color={color}
                fill={focused ? color : "transparent"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color, focused }) => (
              <Star color={color} fill={focused ? color : "transparent"} />
            ),
          }}
        />
        <Tabs.Screen
          name="dummy"
          options={{
            title: "dummy",
            tabBarIcon: ({ color, focused }) => <NotepadText color={color} />,
          }}
          listeners={{
            tabPress: (e) => {
              console.log({ e });
              e.preventDefault();
              router.push("home/transactions");
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeTabLayout;
