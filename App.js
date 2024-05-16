import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      
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
