import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import LinkingConfiguration from "./LinkingConfiguration";
import SceneScreen from "../screens/SceneScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Scenes">
      <Drawer.Screen name="Scenes" component={SceneScreen} />
    </Drawer.Navigator>
  );
}
