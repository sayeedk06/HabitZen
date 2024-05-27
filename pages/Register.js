import { useState } from "react";
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {}
        if (!name) errors.name = "*name is required";
        if (!password) errors.password = "*Password is required";
        if (!confirmPass) errors.confirmPass = "*Confirm Password";
        if (!email) errors.email = "*Email is required";
        if (password != confirmPass) errors.match = "*password does not match";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }
    const createUser = async () => {
        if (validateForm()) {
            const url = "http://172.20.10.2:8000/api/users/register"
            await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {

                        name: name,
                        email: email,
                        password: password,

                    }
                )
            }).then((response) => response.json()).then((responseData) => {
                console.log(responseData);
                navigation.navigate('Log in')
            })
        }

    }



    return (
        <KeyboardAvoidingView style={styles.inputGroup}>
            <View style={styles.formGroup}>
                <Text>Name</Text>
                <TextInput style={styles.input} inputMode="text" autoCorrect={true} placeholder="Enter your full name here..." onChangeText={setName} />
                {errors.name && <Text>{errors.name}</Text>}
            </View>

            <View style={styles.formGroup}>
                <Text>Email</Text>
                <TextInput style={styles.input} inputMode="email" autoCorrect={true} placeholder="example@gmail.com" onChangeText={setEmail} />
                {errors.name && <Text>{errors.email}</Text>}
            </View>

            <View style={styles.formGroup}>
                <Text>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} autoCorrect={true} placeholder="****" onChangeText={setPassword} />
                {errors.password && <Text>{errors.password}</Text>}
            </View>

            <View style={styles.formGroup}>
                <Text>Confirm Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} autoCorrect={true} placeholder="****" onChangeText={setConfirmPass} />

                {errors.confirmPass && <Text>{errors.confirmPass}</Text>}
                {errors.match && <Text>{errors.match}</Text>}
            </View>

            <View style={styles.formGroup}>
                <Pressable style={styles.button} onPress={createUser}>
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