
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './pages/Root'
import Home from './pages/Home'
import HabitList from './pages/HabitList';
import Detail from './pages/Detail';
import { useState } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  const [loggedin, setLoggedin] = useState(false);
  if (!loggedin) {
    return <Root setloggedin={setLoggedin}/>
  }else {
    return (
    
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Habit" component={HabitList} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>    
      </NavigationContainer>
    );
  }
  
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
