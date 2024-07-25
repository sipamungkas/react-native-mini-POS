import { View, Text, ScrollView } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

const EmployeeLoginScreen = () => {
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
      <Button
        title="Login"
        variant="gradient"
        rounded="lg"
        onPress={() => router.push("home")}
      />
      <View
        style={{
          marginTop: 40,
          paddingHorizontal: 32,
          paddingVertical: 18,
          backgroundColor: Colors.light.lightBlue,
          borderRadius: 16,
        }}
      >
        <ThemedText type="defaultSemiBold" style={{ textAlign: "justify" }}>
          Use the cashier code that can be created by the Owner in{" "}
          <ThemedText style={{ fontWeight: "bold" }}>
            {" "}
            Manage Store {"->"} Cashier Code
          </ThemedText>
        </ThemedText>
      </View>
    </ScrollView>
  );
};

export default EmployeeLoginScreen;
