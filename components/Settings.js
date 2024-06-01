import { Text, Switch, View, StyleSheet } from "react-native";
import { GlobalLayout } from "../components/Layout";
import { useTheme } from "../context/theme";
import { GlobalStyles } from "../styles/global"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
    // Replace useState with useTheme
    const { isLargeText, setIsLargeText, isDark, setIsDark } = useTheme();
    const globalStyles = GlobalStyles();
    
    console.log(isLargeText)
    return (
      <GlobalLayout>
        <View style={[styles.view, globalStyles.container]}>
            <Text style={globalStyles.text}>Change text size to large</Text>
        <Switch
          value={isLargeText}
          onValueChange={async() => {
            await AsyncStorage.setItem("isLargeText", JSON.stringify(!isLargeText));
            setIsLargeText(!isLargeText)}}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
        
        </View>
        <View style={[styles.view, globalStyles.container]}>
        <Text style={globalStyles.text}>Change theme to dark</Text>
        <Switch
          value={isDark}
          onValueChange={async() => {
            await AsyncStorage.setItem("isDark", JSON.stringify(!isDark));
            setIsDark(!isDark)}}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
        </View>
      </GlobalLayout>
    );
  }
const styles = StyleSheet.create({
    view: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20
    },
  });