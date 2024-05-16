import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('./assets/icon.png')}/>
      <TextInput style={styles.textBox} placeholder='Username'/>
      <TextInput style={styles.textBox} placeholder='Password'/>
      <StatusBar style="auto" />
      <View>
        <Pressable>
          <Text>Log in</Text>
        </Pressable>
        <Pressable>
          <Text>Sign Up</Text>
        </Pressable>
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
  logo: {
    width: 300,
    height: 300,
  },
  textBox: {
    width: 300,
    height: 50,
    padding: 5,
    borderWidth: 1
  }
});
