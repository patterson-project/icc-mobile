import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    textInputButton: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 10,
    },

    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

export default globalStyles