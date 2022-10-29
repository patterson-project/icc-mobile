import * as React from "react";

import { RootSettingsParamList, RootSettingsScreenProps } from "../types";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

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
});

function SettingsRoot({ navigation }: RootSettingsScreenProps<"SettingsRoot">) {
  return (
    <View style={globalStyles.container}>
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
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        onChangeText={text}
        value={text}
        placeholder="IP Address"
        keyboardType="numeric"
      />
    </View>
  );
}

const SettingScreen = () => {
  return (
    <Settings.Navigator initialRouteName="SettingsRoot">
      <Settings.Screen name="SettingsRoot" component={SettingsRoot} />
      <Settings.Screen name="IPEdit" component={IPEdit} />
    </Settings.Navigator>
  );
};

export default SettingScreen;
