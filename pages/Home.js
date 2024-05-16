import { StyleSheet, View, Image, TextInput, Text} from 'react-native';
import FloatingButton from '../components/floatingButton';
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Welcome to HabitZen!!</Text>
            <Text style={styles.homeText}>Add your habits here</Text>
            <FloatingButton name='+'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    homeText: {
        fontSize: 30,
    }
})