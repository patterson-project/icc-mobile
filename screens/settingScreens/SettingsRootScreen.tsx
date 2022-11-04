import * as React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";

import { RootSettingsScreenProps } from "../../types";
import globalStyles from "../../constants/Styles";

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

export default SettingsRoot;
