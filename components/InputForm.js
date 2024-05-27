import { StyleSheet, Text, View, TextInput } from "react-native";


export default function InputForm({name, placeholder, track}) {
    return (
        <View style={styles.inputGroup}>
            <Text>{name}</Text>
            <TextInput style={styles.input} autoCorrect={true} placeholder={placeholder} onChangeText={track}/>
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