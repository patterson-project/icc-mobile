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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#a3a29e",
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
  gridContainer: {
    padding: 20,
    flex: 1,
    height: "50%",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#aeaeb2",
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
      <View style={styles.gridContainer}>
        <View style={styles.leftColumn}></View>
        <View style={styles.rightColumn}>
          <TextInput
            style={styles.input}
            onChangeText={text}
            value={text}
            placeholder="IP Address"
            keyboardType="numeric"
          />
        </View>
      </View>
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
