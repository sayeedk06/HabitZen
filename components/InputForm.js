import { StyleSheet, Text, View, TextInput } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function InputForm({name, placeholder, track, value}) {
    const globalStyles= GlobalStyles()
    return (
        <View style={styles.inputGroup}>
            <Text style={globalStyles.text}>{name}</Text>
            <TextInput style={styles.input} autoCorrect={true} placeholder={placeholder} value={value} onChangeText={track}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        
    },
    input: {
      height: 30,
      backgroundColor: '#DBE2EF',
      width: 380,
      marginTop: 10,
      padding: 5,
    },

  });