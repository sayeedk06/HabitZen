import { useState } from "react";
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");





    return (
        <KeyboardAvoidingView style={styles.inputGroup}>
            <View style={styles.formGroup}>
                <Text>Name</Text>
                <TextInput style={styles.input} inputMode="text" autoCorrect={true} placeholder="Enter your full name here..." onChangeText={setName}/>
            </View>

            <View style={styles.formGroup}>
                <Text>Email</Text>
                <TextInput style={styles.input} inputMode="email" autoCorrect={true} placeholder="example@gmail.com" onChangeText={setEmail}/>
            </View>

            <View style={styles.formGroup}>
                <Text>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} autoCorrect={true} placeholder="****" onChangeText={setPassword}/>
            </View>

            <View style={styles.formGroup}>
                <Text>Confirm Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} autoCorrect={true} placeholder="****" onChangeText={setConfirmPass}/>
            </View>

            <View  style={styles.formGroup} >
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    formGroup: {
        padding: 10,

    },
    inputGroup: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,

    },
    input: {
        height: 30,
        backgroundColor: '#DBE2EF',
        width: 350,
        marginTop: 10,
        padding: 5,
    },
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

});