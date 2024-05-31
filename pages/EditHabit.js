import { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import InputForm from '../components/InputForm';
export default EditHabit = () => {
    const [errors, setErrors] = useState({});

    const validateForm = () =>{
        let errors = {}
        if (!habit) errors.habit = "*Habit name is required";
        if (!category) errors.category = "*category is required";
        if (!goals) errors.goals = "*goals is required";
        if (!period) errors.period = "*period is required";
        if (!tag) errors.tag = "*Atleast one tag is required";
        if (!startTerm) errors.startTerm = "*Start term is required";
        if (!endTerm) errors.endTerm = "*End term is required";
        if ( startTerm > endTerm){
            errors.invalidTerm = "*Start date cannot be after end date";
        } 
            
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    
    return (
        <ScrollView style={styles.Container}>
            <InputForm name='Name' placeholder='Habit name' track={setHabit} />
            {errors.habit && <Text style={styles.errors}>{errors.habit}</Text>}
            <InputForm name='Description' placeholder='optional' track={setDesc} />
            
            <InputForm name='Category' placeholder='required' track={setCategory} />
            {errors.category && <Text style={styles.errors}>{errors.category}</Text>}
            <View style={styles.inputGroup}>
                <Text>Goals/Period: {period}</Text>
                <View style={styles.horizontalContainer}>
                    <TextInput style={styles.inputGoal} keyboardType="numeric" onChangeText={setGoals} />
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

            <InputForm name='Tag' placeholder='lifestyle, health, wellbeing...' track={setTag} />
            {errors.tag && <Text style={styles.errors}>{errors.tag}</Text>}
            <View>
                <Text style={styles.text}>Start Term: {startTerm}</Text>
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


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Habit</Text>
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