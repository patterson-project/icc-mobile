import "react-native-gesture-handler";

import * as React from "react";

import { ColorSchemeName, StyleSheet } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";

import DeviceScreen from "../screens/DevicesScreen";
import { FC } from "react";
import LightingScreen from "../screens/LightingScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import PowerScreen from "../screens/PowerScreen";
import { RootDrawerParamList } from "../types";
import SceneScreen from "../screens/SceneScreen";
import SettingScreen from "../screens/SettingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootDrawerParamList>();

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

interface ICustomDrawerComponent {
  label: string;
  navigate: any;
}

const CustomDrawerComponent: FC<ICustomDrawerComponent> = (props) => {
  return (
    <DrawerItem
      label={props.label}
      onPress={() => {
        props.navigate;
      }}
      style={styles.bottomDrawerItem}
    />
  );
};

const settingScreen = () => {
  return <Drawer.Screen name="SettingScreen" component={SettingScreen} />;
};

function RootNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SceneScreen" component={SceneScreen} />
      <Drawer.Screen name="DeviceScreen" component={DeviceScreen} />
      <Drawer.Screen name="PowerScreen" component={PowerScreen} />
      <Drawer.Screen name="LightingScreen" component={LightingScreen} />
      <CustomDrawerComponent
        label="Settings"
        navigate={
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        }
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
