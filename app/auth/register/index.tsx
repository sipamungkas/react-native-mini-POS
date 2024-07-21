import { View, Text, ScrollView } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

const RegisterScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 20, marginBottom: 40 }}>
        <Input placeholder="ABC2024012222" label="Cashier code" />
        <Input placeholder="0822123123" label="Phone number" />
        <Input
          placeholder="At least 8 characters"
          label="Password"
          variant="secure"
        />
      </View>
      <Button title="Sign Up" variant="gradient" rounded="lg" />
    </ScrollView>
  );
};

export default RegisterScreen;
