import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button'
import { GlobalLayout } from "../components/Layout";
import { StyleSheet, View, Image, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('ACCESS_TOKEN', value);
  } catch (e) {
    console.log(e);
  }
};




export default function Root({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState(false);
  //console.log(navigation)
  const validateForm = () => {
    let errors = {}
    if (!email) errors.email = "*Username is required";
    if (!password) errors.password = "*Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const authorizeUser = async() => {
    if (validateForm()){
      const url = "http://172.20.10.2:8000/api/users/login"
            await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {

                        email: email,
                        password: password,

                    }
                )
            }).then((response) => {
              if (response.ok) 
                  return response.json()
              
                // throw new Error('Something went wrong')
              }).then((responseData) => {
                console.log(responseData);
                console.log(responseData.token)
                storeData(responseData.token)
                navigation.navigate("Home", {screen:'Profile', params: {text: email}})

            }).catch((err)=>{
              console.log(err)
              setInvalid(true)

            })
    }
  }

  return (
    <GlobalLayout>
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <TextInput style={styles.textBox} placeholder='Username/Email' onChangeText={setEmail}/>
      {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
      <TextInput style={styles.textBox} placeholder='Password' onChangeText={setPassword} secureTextEntry/>
      {errors.password && <Text style={styles.errors}>{errors.password}</Text>}
      {invalid && <Text style={styles.errors}>Invalid username or password </Text>}
      <View style={styles.buttonContainer}>
        <Button name='Log in' validateForm={authorizeUser} navigation={navigation}/>
        <Button name='Register' navigation={navigation}/>
      </View>

    </KeyboardAvoidingView>
    </GlobalLayout>
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