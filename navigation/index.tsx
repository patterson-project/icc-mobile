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
import lightingScreen from "../screens/LightingScreen";
import sceneScreen from "../screens/SceneScreen";
import deviceScreen from "../screens/DevicesScreen";
import powerScreen from "../screens/PowerScreen";
import settingScreen from "../screens/SettingScreen";

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
      <Drawer.Screen name="Scenes" component={sceneScreen} />
      <Drawer.Screen name="Lighting" component={lightingScreen} />
      <Drawer.Screen name="Devices" component={deviceScreen} />
      <Drawer.Screen name="Power" component={powerScreen} />
      <Drawer.Screen name="Settings" component={settingScreen} />
    </Drawer.Navigator>
  );
}
