import { StyleSheet, View, Image, TextInput, Text} from 'react-native';
import FloatingButton from '../components/floatingButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Welcome to HabitZen!!</Text>
            <Image style={styles.backgroundImage} source={require("../assets/background.png")}/>
            <Text style={styles.noitemText}>No habits added yet</Text>
            <Text style={styles.noitemText}>Click + to add</Text>
            <FloatingButton name='+' navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    homeText: {
        fontSize: 30,
    },

    noitemText: {
        color: '#3F72AF',
        fontSize: 20,
    },
    backgroundImage: {
        width: 400,
        height: 400,
        margin: 5,
    }
})