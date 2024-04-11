import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, icon, size, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.pressed && pressed, styles.button]}
    >
      <Ionicons size={size} color={color} name={icon} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});
