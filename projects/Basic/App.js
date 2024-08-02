import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
console.log(pickerResult)
    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World!!</Text>
      <Image
        source={{
          uri:
            selectedImage !== null
              ? selectedImage.localUri
              : "https://picsum.photos/200/200",
        }}
        style={style.image}
      />
      <TouchableOpacity onPress={openImagePickerAsync} style={style.button}>
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
  image: { height: 200, width: 200, borderRadius: 100, resizeMode: "contain" },
  button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 20 },
});

export default App;
