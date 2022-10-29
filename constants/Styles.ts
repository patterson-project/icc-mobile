import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding:10,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

export default globalStyles