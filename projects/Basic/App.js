import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World!!</Text>
      <Image
        source={{
          uri: "https://picsum.photos/200/200",
        }}
        style={style.image}
      />
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
  image: { height: 200, width: 200, borderRadius: 100 },
});

export default App;
