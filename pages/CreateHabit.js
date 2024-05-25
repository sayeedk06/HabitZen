import { StyleSheet, View, TextInput, Text, ScrollView, Pressable} from 'react-native';
import {Calendar, CalendarProvider, ExpandableCalendar} from 'react-native-calendars';
export default function CreateHabit() {
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.inputGroup}>
            <Text>Name</Text>
            <TextInput style={styles.input} placeholder='Habit Name'/>
            </View>
            <View style={styles.inputGroup}>
            <Text>Description</Text>
            <TextInput style={styles.input} placeholder='optional'/>
            </View>
            <View style={styles.inputGroup}>
            <Text>Category</Text>
            <TextInput style={styles.input} placeholder='habit cetegory'/>
            </View>
            <View style={styles.inputGroup}>
            <Text>Goals/Period</Text>
            <View style={styles.horizontalContainer}>
            <TextInput style={styles.inputGoal}/>
            <Text style={styles.centerText}>/</Text>
            <Text style={styles.centerText}>Day</Text>
            <Text style={styles.centerText}>Week</Text>
            <Text style={styles.centerText}>Month</Text>
            </View>
            </View>
            <View style={styles.inputGroup}>
            <Text>Tag</Text>
            <TextInput style={styles.input} placeholder='lifestyle, health, wellbeing'/>
            </View>
            <View>
            <Text style={styles.text}>Start Term</Text>
            <Calendar showWeekNumbers={true} onDayPress={day => {
                console.log('selected day', day);
            }}/>
            <Text style={styles.text}>End Term</Text>
            <Calendar showWeekNumbers={true} onDayPress={day => {
                console.log('selected day', day);
            }}/>
            </View>
            
            <Pressable style={styles.button} onPress={() => console.log("This habit is added")}>
                <Text style={styles.buttonText}>Create Habit</Text>
            </Pressable>
            
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F9F7F7'
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        color: '#FFBB70'
    },
    inputGroup: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        
    },
    input: {
      height: 30,
      backgroundColor: '#DBE2EF',
      width: 380,
      marginTop: 10,
      padding: 5,
    },
    inputGoal: {
      height: 30,
      backgroundColor: '#DBE2EF',
      width: 50,
      marginTop: 10,
      padding: 5,
    },
    centerText: {
        marginTop: 20
    },
    button: {
        marginTop: 5,
        backgroundColor: '#ED9455',
        padding: 35,
         
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5, 
        color: '#FFFBDA'
    }

  });