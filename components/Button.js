import { StyleSheet, Pressable, Text } from "react-native";


// const buttonPress = () => {
//     if (name === 'login'){
//         validateForm()
//     }else if (name === 'signup') {
//         navigation.navigate('signup')
//     }
// }

export default function Button({validateForm, name, navigation}) {
    if (name === 'Log in') {
        return (
            <Pressable style={styles.button} onPress={() => { 
                validateForm()
            }}>
                <Text style={styles.buttonText}>{name}</Text>
            </Pressable>
        );
    }else if (name === 'Register') {
        return (
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register') }>
                <Text style={styles.buttonText}>{name}</Text>
            </Pressable>
        );
    }
   
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FC4100',
        padding: 15,
        width: 100,
        borderRadius: 10,


    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFBDA'

    }
})