import { useState, useEffect } from 'react';
import FloatingButton from './floatingButton';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, Image, Text, Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyles } from "../styles/global"
import { GlobalLayout } from "../components/Layout";
const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('ACCESS_TOKEN');

        if (value !== null) {
            return value
        } else {
            console.log("Doesnt work")
        }
    } catch (e) {
        console.log(e);
    }
};

const deleteItem = async (id) => {
    console.log(id)
    const item = fetch(`http://172.20.10.2:8000/api/habits/delete/${id}`,{
        method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
    })
                .then(response=> response.json())
                .then(data => console.log(data))
                .catch(err => console.Console.log(err))
}


export default function Profile({ route, navigation }) {

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const { text } = route.params;
    const globalStyles = GlobalStyles();

    // console.log("Email" + globalStyles.text)

    useEffect(() => {
        const user = fetch(`http://172.20.10.2:8000/api/users/${text}`)
                    .then(response => response.json())
                    .then(data => {
                        setUser(data[0])
                        return fetch( `http://172.20.10.2:8000/api/habits/${data[0].iduser}`)
                    .catch(err => console.error('Request failed', err))
                    })
        user.then(response => response.json())
                    .then(data => setData(data))
    }, [route,data])

    if (data.length > 0) {
        return (
            <GlobalLayout>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Welcome</Text>
                    
                    <Text style={[styles.username,globalStyles.title]} >{user.name}</Text>
                    

                </View>

                <ScrollView>

                    {data.map((x) => (
                        <View key={x.idhabits} style={styles.habitContainer}>
                            <View style={styles.habitDetail}>
                            <Pressable style={styles.habitButton}>
                                <Text style={styles.habitTitle}>{x.name}</Text>
                            </Pressable>
                            <Text style={globalStyles.title}>Goal: {x.goals} times per {x.period}</Text>
                            <Text style={globalStyles.title}>Habit Period: {x.startTerm.split('T')[0]} - {x.endTerm.split('T')[0]}</Text>
                            <Text style={globalStyles.title}>Habit Challenge due in </Text>
                            </View>
                            <View>
                            <Pressable style={styles.deleteButton} onPress  ={()=>deleteItem(x.idhabits)}>
                                <Icon name="delete" size={30} color="#FFBB70" />
                            </Pressable>
                            <Pressable style={styles.deleteButton} onPress={()=> navigation.navigate('edit habit',{habitid: x.idhabits, text: user.email})}>
                                <Icon name="edit" size={30} color="#FFBB70" />
                            </Pressable>
                            </View>
                            
                        </View>
                    ))}

                </ScrollView>
                
                <FloatingButton name='+' navigation={navigation} empty={false} userId={user.iduser} email={user.email} />
                
            </GlobalLayout>
        )
    } else {
        return (

            <View style={[styles.container, globalStyles.container]}>
                <Text style={[styles.homeText, globalStyles.homeText]}>Welcome to HabitZen!!</Text>
                
                    
                <Text style={globalStyles.text} >{user.name}</Text>
                   
                


                <Image style={styles.backgroundImage} source={require("../assets/background.png")} />
                <Text style={styles.noitemText}>No habits added yet</Text>
                <Text style={styles.noitemText}>Click + to add</Text>
             
                    
                <FloatingButton name='+' navigation={navigation} empty={true} userId={user.iduser} email={user.email} />
                  
               

            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    titleBox: {
        padding: 30,
        width: '95%',
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#ED9455"
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 30

    },
    habitTitle: {
        color: '#FFF',
        fontSize: 30

    },
    username: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
    },
    habitText: {
        color: "#FFFBDA",
        fontSize: 25,
    },
    habitButton: {
        
        backgroundColor: "#ED9455",
        margin: 5,
    },
    deleteButton: {
        padding: 10,
        width: 80,
        margin: 5,
    },
    addButton: {
        padding: 10,
        width: 50,
    },
    habitContainer: {
        width: "95%",
        borderRadius: 10,
        backgroundColor: "#ED9455",
        margin: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    habitDetail: {
        padding: 20
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