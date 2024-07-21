import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import styles from "./styles";
import { ThemedText } from "../ThemedText";
import { ChevronLeft, LucideIcon, UserRound } from "lucide-react-native";

export type ButtonProps = {
  rounded?: "default" | "lg" | "sm";
  variant?: "default" | "outline" | "gradient" | "nude" | "back";
  title?: string;
  onPress?: () => void;
  isLoading?: boolean;
  Icon?: React.ReactNode;
};

const Button = ({
  rounded,
  onPress,
  title,
  isLoading,
  variant,
  Icon,
}: ButtonProps) => {
  if (variant === "back") {
    return (
      <Pressable onPress={onPress} disabled={isLoading}>
        <View style={[styles.containerBack, styles.roundedBack]}>
          <ChevronLeft color={Colors.light.white} size={30} />
        </View>
      </Pressable>
    );
  }
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
          style={rounded === "lg" ? styles.roundedLarge : styles.roundedDefault}
        >
          <View
            style={[
              styles.container,
              !!Icon && { flexDirection: "row", justifyContent: "flex-start" },
            ]}
          >
            {Icon}
            <ThemedText
              type="defaultSemiBold"
              style={[
                { fontWeight: "700" },
                !!Icon && { textAlign: "center", flex: 1 },
              ]}
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
            rounded === "lg" ? styles.roundedLarge : styles.roundedDefault,
          ]}
        >
          <View
            style={[
              !!Icon && { flexDirection: "row", justifyContent: "flex-start" },
            ]}
          >
            {Icon}
            <ThemedText
              type="defaultSemiBold"
              style={[
                { fontWeight: "700" },
                !!Icon && { textAlign: "center", flex: 1 },
              ]}
              lightColor={Colors.light.blue}
              darkColor={Colors.light.blue}
            >
              {title}
            </ThemedText>
          </View>
        </View>
      </Pressable>
    );
  }
  if (variant === "nude") {
    return (
      <Pressable onPress={onPress} disabled={isLoading}>
        <View
          style={[
            styles.container,
            rounded === "lg" ? styles.roundedLarge : styles.roundedDefault,
          ]}
        >
          <ThemedText
            type="defaultSemiBold"
            style={{ fontWeight: "600" }}
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
          rounded === "lg" ? styles.roundedLarge : styles.roundedDefault,
        ]}
      >
        <View
          style={[
            !!Icon && { flexDirection: "row", justifyContent: "flex-start" },
          ]}
        >
          {Icon}
          <ThemedText
            type="defaultSemiBold"
            style={[
              { fontWeight: "700" },
              !!Icon && { textAlign: "center", flex: 1 },
            ]}
            lightColor={Colors.light.white}
            darkColor={Colors.light.white}
          >
            {title}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
};

export default Button;
