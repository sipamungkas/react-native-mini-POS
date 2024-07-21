import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { UserRound, UsersRound } from "lucide-react-native";

const RolesLoginScreen = () => {
  const dimensions = useWindowDimensions();
  return (
    <ScrollView>
      <ThemedText
        type="title"
        style={{ fontSize: 24, color: Colors.light.navy, marginBottom: 12 }}
      >
        Welcome to MiniPOS!
      </ThemedText>
      <ThemedText
        type="default"
        style={{ color: Colors.light.navy, fontFamily: "RubikRegular" }}
      >
        Select login as the owner or employee first to continue.
      </ThemedText>
      <View style={{ marginVertical: 50, alignItems: "center" }}>
        <Image
          source={require("@/assets/images/illustration_roles.png")}
          style={{
            width: (162 / 375) * dimensions.width,
            height: (162 / 375) * dimensions.width * 1.15,
            objectFit: "contain",
          }}
        />
      </View>
      <View style={{ gap: 12 }}>
        <Button
          variant="gradient"
          rounded="lg"
          title="Login as Owner"
          onPress={() => router.push("/auth/owner-login")}
          Icon={<UserRound color="white" />}
        />
        <ThemedText style={{ textAlign: "center", color: Colors.light.navy }}>
          Or
        </ThemedText>
        <Button
          variant="gradient"
          rounded="lg"
          title="Login as Employee"
          onPress={() => router.push("/auth/employee-login")}
          Icon={<UsersRound color="white" />}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedText
            type="default"
            style={{
              fontSize: 12,
              textAlign: "center",
              color: Colors.light.navy,
            }}
          >
            Don't have an account?
          </ThemedText>
          <ThemedText
            onPress={() => router.push("/auth/register")}
            type="default"
            style={{
              textAlign: "center",
              fontSize: 12,
              color: Colors.light.blue,
              textDecorationLine: "underline",
              fontWeight: "500",
            }}
          >
            Sign Up
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

export default RolesLoginScreen;
