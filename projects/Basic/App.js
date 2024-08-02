import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

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
      <TouchableOpacity
        onPress={() => Alert.alert("Hello!!!")}
        style={style.button}
      >
        <Text style={style.buttonText}>Press Me</Text>
      </TouchableOpacity>
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
  button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 20 },
});

export default App;
