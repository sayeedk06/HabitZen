import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button'
import { StyleSheet, View, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Root({navigation}) {
    return (
        <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')}/>
      <TextInput style={styles.textBox} placeholder='Username'/>
      <TextInput style={styles.textBox} placeholder='Password'/>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button name='Log in' navigation={navigation}/>
        <Button name='Sign up'/>
      </View>
     
    </View>
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
  
    }
  });