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
import LightingScreen from "../screens/LightingScreen";
import SceneScreen from "../screens/SceneScreen";
import DeviceScreen from "../screens/DevicesScreen";
import PowerScreen from "../screens/PowerScreen";
import SettingScreen from "../screens/SettingScreen";
import { RootDrawerParamList } from "../types";

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
  const Drawer = createDrawerNavigator<RootDrawerParamList>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SceneScreen" component={SceneScreen} />
      <Drawer.Screen name="DeviceScreen" component={DeviceScreen} />
      <Drawer.Screen name="PowerScreen" component={PowerScreen} />
      <Drawer.Screen name="LightingScreen" component={LightingScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
