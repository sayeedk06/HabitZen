import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Pressable} from 'react-native';

async function getData () {
  const url = "http://172.20.10.2:8000/habits"
  const res = await fetch(url);
  const data = await res.json();
  console.log ("lalal" + data);
  
  return data
}


export default function HabitList ({navigation}) {
  const [gitRepos, setGitRepos] = useState([]);
  useEffect(() => {
    (async () => {
        try {
            const data = await getData();
            console.log(data)
            setGitRepos(data);
            
  
        }catch(e) {
            console.log("FETCH:"+ e)
           
        }
        
    }

    )();
}, [])
    return (
        <View>
            <ScrollView>
                <Text style={styles.categoryText}>Fitness</Text>
                
                {gitRepos.map((x) => (
                  <Pressable onPress={() => navigation.navigate('Detail')}>
                    <Text style={styles.listText}>{x.Name}</Text>
                </Pressable>
                ))}
                <Text style={styles.categoryText}>Wellbeing</Text>
                <Text style={styles.categoryText}>Health</Text>
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    categoryText: {
      fontSize: 25,
      margin: 5
    },
    listText: {
        backgroundColor: '#FFFBDA',
        fontSize: 20,
        padding: 20,
        margin: 5,
    }
})