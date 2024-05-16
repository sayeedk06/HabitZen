import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
export default function Button({name}) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
})