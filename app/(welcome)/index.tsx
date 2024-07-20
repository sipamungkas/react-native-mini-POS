import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>WelcomeScreen</Text>
      </View>
      <Button title="Login" />
      <Button title="Login" variant="outline" />
      <Button title="Login" variant="gradient" />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
