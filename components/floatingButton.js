import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
export default function FloatingButton({name, navigation, empty, userId, email}) {
    console.log("In float " + userId)
    return (
        <Pressable style={[empty? styles.button: styles.buttonData]} onPress={()=> navigation.navigate('Create habit', {userId: userId, email: email})}>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      },

    buttonData: {
        position: 'absolute',
        top: 510,
        left: 260,
        backgroundColor: '#FC4100',
        padding: 25,
        width: 100,
        height: 100,
        margin: 25,
        
        borderRadius: 100, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,       
    }, 
      buttonText: {
        fontSize: 35,
        textAlign: 'center',
        color: '#FFFBDA'
    
      }
})