import { StyleSheet, View, TextInput, Text, ScrollView, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import InputForm from '../components/InputForm';
import { useState } from 'react';

export default function CreateHabit() {
    const [habit, setHabit] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [goals, setGoals] = useState("");
    const [period, setPeriod] = useState("");
    const [tag, setTag] = useState("");
    const [startTerm, setStartTerm] = useState("");
    const [endTerm, setEndTerm] = useState("");

    const createHabit = async() => {
        const url = "http://172.20.10.2:8000/api/habits"
        await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(
                {

                    name: "funnnnnstuufff",
                    description: "This is a test habit",
                    category: "fitness",
                    goals: 1,
                    period: "week",
                    tags: "health, stamina, fitness",
                    startTerm: "2024-05-25",
                    endTerm: "2024-05-25"

                }
            )
        }).then((response) => response.json()).then((responseData) => {
            console.log(responseData);
        })
    }

    return (
        <ScrollView style={styles.Container}>

            <InputForm name='Name' placeholder='Habit name' track={setHabit} />
            <InputForm name='Description' placeholder='optional' track={setDesc} />
            <InputForm name='Category' placeholder='required' track={setCategory} />

            <View style={styles.inputGroup}>
                <Text>Goals/Period: {period}</Text>
                <View style={styles.horizontalContainer}>
                    <TextInput style={styles.inputGoal} keyboardType="numeric" track={setGoals} />
                    <Text style={styles.centerText}>/</Text>

                    <Pressable onPress={() => setPeriod("day")}>
                        <Text style={styles.centerText}>Day</Text>
                    </Pressable>
                    <Pressable onPress={() => setPeriod("Week")}>
                        <Text style={styles.centerText}>Week</Text>
                    </Pressable>
                    <Pressable onPress={() => setPeriod("Month")}>
                        <Text style={styles.centerText}>Month</Text>
                    </Pressable>

                </View>
            </View>

            <InputForm name='Tag' placeholder='lifestyle, health, wellbeing...' track={setTag} />

            <View>
                <Text style={styles.text}>Start Term: {startTerm}</Text>
                <Calendar showWeekNumbers={true} onDayPress={day => {
                    console.log('selected day', day);
                    setStartTerm(day.dateString);
                }} />
                <Text style={styles.text}>End Term: {endTerm}</Text>
                <Calendar showWeekNumbers={true} onDayPress={day => {
                    console.log('selected day', day);
                    setEndTerm(day.dateString);
                }} />
            </View>


            <Pressable style={styles.button} onPress={() => createHabit()}>
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