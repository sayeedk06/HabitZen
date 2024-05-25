import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
export default function FloatingButton({name, navigation}) {
    return (
        <Pressable style={styles.button} onPress={()=> navigation.navigate('Create habit')}>
            <Text style={styles.buttonText}>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FC4100',
        padding: 25,
        width: 100,
        height: 100,
        margin: 25,
        borderRadius: 100,
    
        
      },
      buttonText: {
        fontSize: 35,
        textAlign: 'center',
        color: '#FFFBDA'
    
      }
})