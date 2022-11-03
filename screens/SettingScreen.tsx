import * as React from "react";

import { IPInput, Text, View } from "../components/Themed";
import { RootSettingsParamList, RootSettingsScreenProps } from "../types";
import { StyleSheet, TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import globalStyles from "../constants/Styles";
import { useState } from "react";

const Settings = createNativeStackNavigator<RootSettingsParamList>();

const styles = StyleSheet.create({
  textInputButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  iPAddressText: {
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
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
  sectionViewContainer: {
    padding: 5,
    flex: 0.1,
    borderRadius: 10,
    flexDirection: "column",
  },
});

function SettingsRoot({ navigation }: RootSettingsScreenProps<"SettingsRoot">) {
  return (
    <View style={globalStyles.container} lightColor="#f2f2f7">
      <TouchableOpacity
        style={styles.textInputButton}
        onPress={() => navigation.navigate("IPEdit")}
      >
        <Text style={styles.iPAddressText}>IP Address</Text>
      </TouchableOpacity>
    </View>
  );
}

function IPEdit({ navigation }: RootSettingsScreenProps<"IPEdit">) {
  const [text, onChangeNumber] = useState(undefined);
  return (
    <View style={globalStyles.container} lightColor="#f2f2f7">
      <View
        style={styles.sectionViewContainer}
        lightColor="#ffffff"
        darkColor="#1c1c1e"
      >
        <IPInput
          style={styles.input}
          lightColor="#f2f2f7"
          darkColor="#000000"
          onChangeText={text}
          value={text}
          placeholder="IP Address"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

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
