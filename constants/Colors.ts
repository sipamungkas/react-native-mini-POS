/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    white: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    // design system colors
    background: "#F7F8FA",
    blue: "#1A72DD",
    navy: "#2A3256",
    grey: "#D1D1D1",
    greyDark: "#BDBDBD",
    gradientBlueStart: "#1A72DD",
    gradientBlueEnd: "#0D62CA",
    red: "#F4261A",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    // design system colors
    blue: "#1A72DD",
    navy: "#2A3256",
    grey: "#D1D1D1",
    greyDark: "#BDBDBD",
    gradientBlueStart: "#1A72DD",
    gradientBlueEnd: "#0D62CA",
    red: "#F4261A",
  },
};
