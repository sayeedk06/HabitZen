import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import Button from './components/Button'
export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('./assets/icon.png')}/>
      <TextInput style={styles.textBox} placeholder='Username'/>
      <TextInput style={styles.textBox} placeholder='Password'/>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button name='Log in'/>
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
