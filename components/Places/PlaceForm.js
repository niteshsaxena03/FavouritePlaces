import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredTitle) {
    setEnteredTitle(enteredTitle);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
      </View>
      <ImagePicker/>
    </ScrollView>
  );
}
export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    borderBottomColor: Colors.primary700,
    marginVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
