import { StyleSheet, Text, View } from "react-native";
import DomTester from "./DOMTester";
export default function App() {
  return (
    <View style={styles.container}>
      <DomTester />
      <DomTester />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
