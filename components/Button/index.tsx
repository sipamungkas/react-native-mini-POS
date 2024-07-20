import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import styles from "./styles";
import { ThemedText } from "../ThemedText";

export type ButtonProps = {
  rounded?: "default" | "large";
  variant?: "default" | "outline" | "gradient";
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
};

const Button = ({
  rounded,
  onPress,
  title,
  isLoading,
  variant,
}: ButtonProps) => {
  if (variant === "gradient") {
    return (
      <Pressable onPress={onPress} disabled={isLoading}>
        <LinearGradient
          colors={[
            Colors.light.gradientBlueStart,
            Colors.light.gradientBlueEnd,
          ]}
          start={[0.2, 0.4]}
          end={[1, 1]}
          style={
            rounded === "large" ? styles.roundedLarge : styles.roundedDefault
          }
        >
          <View style={styles.container}>
            <ThemedText
              type="defaultSemiBold"
              lightColor="white"
              darkColor="white"
            >
              {title}
            </ThemedText>
          </View>
        </LinearGradient>
      </Pressable>
    );
  }
  if (variant === "outline") {
    return (
      <Pressable onPress={onPress} disabled={isLoading}>
        <View
          style={[
            styles.container,
            { borderColor: Colors.light.blue, borderWidth: 1 },
            rounded === "large" ? styles.roundedLarge : styles.roundedDefault,
          ]}
        >
          <ThemedText
            type="defaultSemiBold"
            lightColor={Colors.light.blue}
            darkColor={Colors.light.blue}
          >
            {title}
          </ThemedText>
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={onPress} disabled={isLoading}>
      <View
        style={[
          styles.container,
          { backgroundColor: Colors.light.blue },
          rounded === "large" ? styles.roundedLarge : styles.roundedDefault,
        ]}
      >
        <ThemedText type="defaultSemiBold" lightColor="white" darkColor="white">
          {title}
        </ThemedText>
      </View>
    </Pressable>
  );
};

export default Button;
