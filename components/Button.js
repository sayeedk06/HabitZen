import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

const onlogin = (setLoggedin) => {
    setLoggedin  (true)
} 

export default function Button({name,setloggedin}) {
    return (
        <Pressable style={styles.button} onPress={() => onlogin(setloggedin)}>
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