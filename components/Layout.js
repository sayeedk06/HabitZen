import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/global"
export function GlobalLayout({ children }) {
    const globalStyles = GlobalStyles();
  return (
    <SafeAreaView style={[styles.safeArea,globalStyles.container]}>
      <StatusBar style="auto" />
      <View style={[styles.container,globalStyles.container]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
});