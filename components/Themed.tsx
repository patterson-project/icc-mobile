import {
  Text as DefaultText,
  View as DefaultView,
  StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SectionView(props: ViewProps) {
  const { ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: "#e5e5ea", dark: "#1c1c1e" },
    "background"
  );
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      borderRadius: 10,
      flexDirection: "row",
    },
  });
  return (
    <DefaultView
      style={[{ backgroundColor }, styles.container]}
      {...otherProps}
    />
  );
}
