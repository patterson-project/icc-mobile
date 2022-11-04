import * as React from "react";

import IPEdit from "./settingScreens/IPInputScreen";
import { RootSettingsParamList } from "../types";
import SettingsRoot from "./settingScreens/SettingsRootScreen";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Settings = createNativeStackNavigator<RootSettingsParamList>();

const styles = StyleSheet.create({
  leftColumn: {
    borderRadius: 10,
    height: 40,
    flex: 3,
    alignContent: "flex-start",
    padding: 10,
  },
  rightColumn: {
    borderRadius: 10,
    height: 40,
    flex: 3,
    alignContent: "flex-start",
    padding: 10,
  },
});

const SettingScreen = () => {
  return (
    <Settings.Navigator initialRouteName="SettingsRoot">
      <Settings.Screen
        name="SettingsRoot"
        component={SettingsRoot}
        options={{ headerShown: false }}
      />
      <Settings.Screen
        name="IPEdit"
        component={IPEdit}
        options={{
          title: "",
          headerTransparent: true,
          headerBlurEffect: "systemUltraThinMaterial",
        }}
      />
    </Settings.Navigator>
  );
};

export default SettingScreen;
