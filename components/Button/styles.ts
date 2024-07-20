import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  txtButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "RubikRegular",
  },
  roundedLarge: { borderRadius: 16 },
  roundedDefault: { borderRadius: 5 },
  roundedBack: { borderRadius: 8 },
  containerBack: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: Colors.light.blue,
  },
});
