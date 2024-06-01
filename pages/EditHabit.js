import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import InputForm from '../components/InputForm';

export default EditHabit = ({ route, navigation }) => {
    const [habit, setHabit] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [goals, setGoals] = useState("");
    const [period, setPeriod] = useState("");
    const [tag, setTag] = useState("");
    const [startTerm, setStartTerm] = useState("");
    const [endTerm, setEndTerm] = useState("");
    const [errors, setErrors] = useState({});
    const { habitid, text } = route.params;


    useEffect(() => {
        console.log(habitid)
        const value = fetch('http://172.20.10.2:8000/api/habits/?' + new URLSearchParams({ idhabits: habitid }))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setHabit(data[0].name)
                setDesc(data[0].description)
                setCategory(data[0].category)
                setGoals((data[0].goals).toString())

                setPeriod(data[0].period)
                setTag(data[0].tags)
                setStartTerm(data[0].startTerm.split('T')[0])
                setEndTerm(data[0].endTerm.split('T')[0])
            })
            .catch(err => console.log(err))
    }, [])




    const validateForm = () => {
        let errors = {}
        if (!habit) errors.habit = "*Habit name is required";
        if (!category) errors.category = "*category is required";
        if (!goals) errors.goals = "*goals is required";
        if (!period) errors.period = "*period is required";
        if (!tag) errors.tag = "*Atleast one tag is required";
        if (!startTerm) errors.startTerm = "*Start term is required";
        if (!endTerm) errors.endTerm = "*End term is required";
        if (startTerm > endTerm) {
            errors.invalidTerm = "*Start date cannot be after end date";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const updateHabit = async () => {
        if (validateForm) {
            const url = `http://172.20.10.2:8000/api/habits/update/${habitid}`
            const update = await fetch(url, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        name: habit,
                        description: desc,
                        category: category,
                        goals: goals,
                        period: period,
                        tags: tag,
                        startTerm: startTerm,
                        endTerm: endTerm,

                    }

                )

            }

            ).then((response)=>response.json().then((data)=>{
                console.log(data);
                navigation.navigate("Home", {screen: 'Profile', params: {text: text}});
            }))
        }
    }

    return (
        <ScrollView style={styles.Container}>
            <InputForm name='Name' placeholder={habit} value={habit} track={setHabit} />
            {errors.habit && <Text style={styles.errors}>{errors.habit}</Text>}
            <InputForm name='Description' value={desc} track={setDesc} />

            <InputForm name='Category' value={category} track={setCategory} />
            {errors.category && <Text style={styles.errors}>{errors.category}</Text>}
            <View style={styles.inputGroup}>
                <Text>Goals/Period: {period}</Text>
                <View style={styles.horizontalContainer}>
                    <TextInput style={styles.inputGoal} value={goals} keyboardType="numeric" onChangeText={setGoals} />
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
                {errors.goals && <Text style={styles.errors}>{errors.goals}</Text>}
                {errors.period && <Text style={styles.errors}>{errors.period}</Text>}
            </View>

            <InputForm name='Tag' value={tag} track={setTag} />
            {errors.tag && <Text style={styles.errors}>{errors.tag}</Text>}
            <View>
                <Text style={styles.text}>Start Term:{startTerm}</Text>
                {errors.startTerm && <Text style={styles.errors}>{errors.startTerm}</Text>}

                <Calendar showWeekNumbers={true} onDayPress={day => {
                    console.log('selected day', day);
                    setStartTerm(day.dateString);
                }} />
                <Text style={styles.text}>End Term: {endTerm}</Text>
                {errors.endTerm && <Text style={styles.errors}>{errors.endTerm}</Text>}
                {errors.invalidTerm && <Text style={styles.errors}>{errors.invalidTerm}</Text>}
                <Calendar showWeekNumbers={true} onDayPress={day => {
                    console.log('selected day', day);
                    setEndTerm(day.dateString);
                }} />
            </View>


            <TouchableOpacity style={styles.button} onPress={() => updateHabit()}>
                <Text style={styles.buttonText}>Update Habit</Text>
            </TouchableOpacity>


        </ScrollView>
    )
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
    },
    errors: {
        color: '#C73659'
    }

});