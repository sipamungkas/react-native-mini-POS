import { View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.light.white, height: "100%" }}
    >
      <View>
        <ThemedText
          style={{
            fontFamily: "RubikRegular",
            textAlign: "center",
            marginTop: 24,
          }}
          type="title"
          lightColor={Colors.light.blue}
        >
          MiniPOS
        </ThemedText>
        <View
          style={{ alignItems: "center", marginTop: 100, marginBottom: 20 }}
        >
          <Image source={require("@/assets/images/onboarding_image_1.png")} />
        </View>
        <ThemedText
          type="subtitle"
          style={{ textAlign: "center", fontSize: 18, marginBottom: 88 }}
        >
          Easy Management for your Store.
        </ThemedText>
        <View style={{ paddingHorizontal: 24, gap: 20 }}>
          <Button
            onPress={() => {
              router.push("/auth/register");
            }}
            title="Create new account"
            rounded="lg"
          />
          <Button
            variant="outline"
            title="Log In"
            rounded="lg"
            onPress={() => router.push("/auth")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
