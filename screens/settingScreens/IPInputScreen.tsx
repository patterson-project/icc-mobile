import * as React from "react";

import { IPInput, View } from "../../components/Themed";

import { RootSettingsScreenProps } from "../../types";
import { StyleSheet } from "react-native";
import globalStyles from "../../constants/Styles";
import { useState } from "react";

const styles = StyleSheet.create({
  sectionViewContainer: {
    padding: 5,
    flex: 0.1,
    borderRadius: 10,
    marginTop: 30,
    flexDirection: "column",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

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

export default IPEdit;
