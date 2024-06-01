
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './pages/Root'
import Home from './pages/Home'
import CreateHabit from './pages/CreateHabit';
import Register from './pages/Register';
import EditHabit from './pages/EditHabit';
import { ThemeProvider } from "./context/theme";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          <Stack.Screen name="Log in" component={Root} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false, headerLeft: () => <></> }} />
          <Stack.Screen name="Create habit" component={CreateHabit} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="edit habit" component={EditHabit} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
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
