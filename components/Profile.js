import { useState, useEffect } from 'react';
import FloatingButton from './floatingButton';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, Image,Text, Pressable, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('ACCESS_TOKEN');

      if (value !== null) {
        
        return value
      }else {
        console.log("Doesnt work")
      }
    } catch (e) {
      console.log(e);
    }
  };


async function getData () {
    const token = await getToken();
    const headers = {'Authorization': `Bearer ${token}`}
    const url = "http://172.20.10.2:8000/api/habits"
    const res = await fetch(url, {headers});
    const data = await res.json();
    console.log ("lalal" + data);
  
    return data
  }

export default function Profile({navigation}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await getData();
                console.log(data)
                setData(data);
    
    
            }catch(e) {
                console.log("FETCH:"+ e)
    
            }
    
        }
    
        )();
    }, [])

    if(data.length > 0) {
        return (
            <ScrollView>
            {data.map((x)=> (
                <View style={styles.habitContainer}>
                <Pressable style={styles.habitButton}>
                {/* <Icon name="rightsquareo" />               */}
                <Text style={styles.habitText}>{x.name}</Text>
                </Pressable>
                <Pressable style={styles.deleteButton}>
                <Icon name="delete" size={30} color="#FFBB70" />
                </Pressable>
                <Pressable style={styles.addButton}>
                <Icon name="plussquare" theme="outlined" size={30} color="#ED9455" />
                </Pressable>
                </View>
            ))}
            <FloatingButton name='+' navigation={navigation}/>
            </ScrollView>
        )
    }else {
        return (

            <View style={styles.container}>
                <Text style={styles.homeText}>Welcome to HabitZen!!</Text>
                <Image style={styles.backgroundImage} source={require("../assets/background.png")}/>
                <Text style={styles.noitemText}>No habits added yet</Text>
                <Text style={styles.noitemText}>Click + to add</Text>
                <FloatingButton name='+' navigation={navigation}/>
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
    habitText: {
        color: "#FFFBDA",
        fontSize: 20,
    },
    habitButton: {
        flexDirection: 'row',
        backgroundColor: "#ED9455",
        padding: 10,
        width: 200,
        margin: 5,
    },
    deleteButton: {
        // backgroundColor: "#C73659",
        padding: 10,
        width: 80,
        margin: 5, 
    },
    addButton: {
        padding: 10,
        width: 80,
        margin: 5, 
    },
    habitContainer: {
        width: "100%",
        margin: 1,
        flexDirection: 'row'

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