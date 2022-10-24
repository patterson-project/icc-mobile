import * as React from "react";
import { Text, View } from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import { StyleSheet } from "react-native";

const deviceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Screen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default deviceScreen;
