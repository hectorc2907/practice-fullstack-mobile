import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff" },
});

export default App;
