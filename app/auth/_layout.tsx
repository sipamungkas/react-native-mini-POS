import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { router, Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        statusBarStyle: "dark",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: Colors.light.blue,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white", padding: 24 },
        headerLeft: ({ canGoBack }) => {
          if (canGoBack) {
            return (
              <Button
                variant="back"
                onPress={() => {
                  router.back();
                }}
              />
            );
          }
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Log In" }} />
      <Stack.Screen
        name="employee-login/index"
        options={{ title: "Login as Employee" }}
      />
      <Stack.Screen
        name="owner-login/index"
        options={{ title: "Login as Owner" }}
      />
      <Stack.Screen name="register/index" options={{ title: "Register" }} />
    </Stack>
  );
};
export default AuthLayout;
