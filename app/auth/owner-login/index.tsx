import { View, Text, ScrollView } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

const OwnerLoginScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 20, marginBottom: 40 }}>
        <Input placeholder="ABC2024012222" label="Cashier code" />
        <Input
          placeholder="At least 8 characters"
          label="Password"
          variant="secure"
        />
      </View>
      <Button title="Login" variant="gradient" rounded="lg" />
      <ThemedText
        onPress={() => router.push("/auth/forgot-password")}
        type="default"
        style={{
          textAlign: "center",
          fontSize: 12,
          color: Colors.light.blue,
          textDecorationLine: "underline",
          fontWeight: "700",
          marginTop: 12,
        }}
      >
        Forgot Password?
      </ThemedText>
    </ScrollView>
  );
};

export default OwnerLoginScreen;
