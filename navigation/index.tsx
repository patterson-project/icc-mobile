import "react-native-gesture-handler";

import * as React from "react";

import { ColorSchemeName, StyleSheet } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import DeviceScreen from "../screens/DevicesScreen";
import LightingScreen from "../screens/LightingScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import PowerScreen from "../screens/PowerScreen";
import { RootDrawerParamList } from "../types";
import SceneScreen from "../screens/SceneScreen";
import SettingScreen from "../screens/SettingScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomDrawerItem: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});

function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="SceneScreen">
      <Drawer.Screen
        name="SceneScreen"
        component={SceneScreen}
        options={{ title: "Scenes" }}
      />
      <Drawer.Screen
        name="DeviceScreen"
        component={DeviceScreen}
        options={{ title: "Devices" }}
      />
      <Drawer.Screen
        name="PowerScreen"
        component={PowerScreen}
        options={{ title: "Power" }}
      />
      <Drawer.Screen
        name="LightingScreen"
        component={LightingScreen}
        options={{ title: "Lighting" }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

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
