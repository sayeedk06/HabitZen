import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button'
import { StyleSheet, View, Image, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import { useState } from 'react';




export default function Root({ navigation, setloggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {}
    if (!username) errors.username = "*Username is required";
    if (!password) errors.password = "*Password is required";
    setErrors(errors);
    let ErrorSize = Object.keys(errors).length;
    if (ErrorSize === 0) {
        setloggedin(true)
    }
    return Object.keys(errors).length === 0;
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <TextInput style={styles.textBox} placeholder='Username' onChangeText={setUsername}/>
      {errors.username && <Text style={styles.errors}>{errors.username}</Text>}
      <TextInput style={styles.textBox} placeholder='Password' onChangeText={setPassword} secureTextEntry/>
      {errors.password && <Text style={styles.errors}>{errors.password}</Text>}
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button name='Log in' validateForm={validateForm}/>
        <Button name='Sign up' />
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 300,
    height: 300,
  },
  textBox: {
    borderColor: '#ED9455',
    width: 300,
    height: 50,
    padding: 5,
    borderWidth: 1

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

  },
  errors: {
    color: '#C73659'
  }
});