import { StyleSheet, View, Image, TextInput, Text, ScrollView, Pressable} from 'react-native';

const habitlist = {
    "habits": [
      {
        "id": 1,
        "name": "Morning Meditation",
        "description": "Practice mindfulness for 10 minutes every morning.",
        "frequency": "daily",
        "streak": 15,
        "category": "Wellness"
      },
      {
        "id": 2,
        "name": "Read 20 Pages",
        "description": "Read a book for at least 20 pages each day.",
        "frequency": "daily",
        "streak": 30,
        "category": "Personal Growth"
      },
      {
        "id": 3,
        "name": "Cycle",
        "description": "Work out at the gym or go for a run.",
        "frequency": "3 times a week",
        "streak": 12,
        "category": "Fitness"
      },
      {
        "id": 4,
        "name": "Drink Water",
        "description": "Practice mindfulness for 10 minutes every morning.",
        "frequency": "daily",
        "streak": 15,
        "category": "Wellness"
      },
      {
        "id": 5,
        "name": "Study",
        "description": "Read a book for at least 20 pages each day.",
        "frequency": "daily",
        "streak": 30,
        "category": "Personal Growth"
      },
      {
        "id": 6,
        "name": "Yoga",
        "description": "Work out at the gym or go for a run.",
        "frequency": "3 times a week",
        "streak": 12,
        "category": "Fitness"
      }
      
    ]
  }



export default function HabitList ({navigation}) {
    return (
        <View>
            <ScrollView>
                {habitlist.habits.map( (x)=> (
                    <Pressable onPress={() => navigation.navigate('Detail')}>
                        <Text style={styles.listText}>{x.name}</Text>
                    </Pressable>
                    
                ))}
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    listText: {
        backgroundColor: '#FFFBDA',
        fontSize: 30,
        padding: 20,
        margin: 5,
    }
})