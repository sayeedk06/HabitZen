import { StyleSheet, Text, TouchableOpacity } from "react-native";


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
            <TouchableOpacity style={styles.button} onPress={() => { 
                validateForm()
            }}>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
        );
    }else if (name === 'Register') {
        return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register') }>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
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