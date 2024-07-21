import { View, Text, TextInput, TextInputProps, Pressable } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import styles from "./styles";
import { Colors } from "@/constants/Colors";
import { Eye, EyeOff } from "lucide-react-native";

export type InputProps = {
  variant?: "default" | "secure";
  label?: string;
};

const Input = ({ variant, label, ...rest }: InputProps & TextInputProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold" style={{ fontWeight: 600 }}>
        {label}
      </ThemedText>
      <View style={[styles.inputWrapper, styles.roundedLarge]}>
        <View
          style={
            variant === "secure" && {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }
          }
        >
          <TextInput
            cursorColor={Colors.light.blue}
            placeholder="placeholder"
            secureTextEntry={variant === "secure" && !isShow}
            {...rest}
          />
          {variant === "secure" && (
            <Pressable
              onPress={() => {
                setIsShow((prev) => !prev);
              }}
            >
              {isShow ? (
                <Eye color={Colors.light.navy} />
              ) : (
                <EyeOff color={Colors.light.navy} />
              )}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default Input;
