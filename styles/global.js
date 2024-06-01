import { StyleSheet } from "react-native";
import { useTheme } from "../context/theme";

export function GlobalStyles() {
    const { isLargeText, isDark } = useTheme();

    const styles = StyleSheet.create({
        text: {
            color: isDark ? '#fff' : '#ED9455',
            fontSize: isLargeText ? 28 : 16,
        },
        container: {
            backgroundColor: isDark ? '#222831' : '#fff'
        },
        homeText: {
            color: isDark ? '#fff' : '#ED9455',
        },
        title: {
            color: isDark? '#fff': '#443C68'
        }


    });

    return styles;
}