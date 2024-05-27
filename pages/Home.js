import { StyleSheet, View, Image, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import About from '../components/About';

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {

    return (
        <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: () =>(<Icon name="user" size={30} color="#FFBB70" />) }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: () =>(<Icon name="setting" size={30} color="#FFBB70" />) }} />
        <Tab.Screen name="About" component={About} options={{ headerShown: false, tabBarIcon: () =>(<Icon name="bars" size={30} color="#FFBB70"/>)}} />
        </Tab.Navigator>

        
    );
}

const styles = StyleSheet.create({
    

    
    
})