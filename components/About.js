import { ScrollView, StyleSheet, Text, View } from "react-native";
import licenses from '../licenses.json'
import { useState } from "react";

const license_name = [];
for (var k in licenses){
    if (licenses.hasOwnProperty(k)){
        if (!(license_name.includes(licenses[k].licenses))){
            license_name.push(licenses[k].licenses)
        }
            
    }
}

console.log(license_name)

export default function About() {

    return (
        <ScrollView style={styles.constainer}>
            <Text style={styles.title}>Introduction</Text>
            <Text>
                Welcome to our Habit Tracker App! Whether you're trying to 
                build new habits or break old ones, our app is here to support you on your journey. 
                With intuitive features and a user-friendly interface, you'll find it easy to stay on track and achieve your goals.
            </Text>
            <Text style={styles.title}>
            Key Features
            </Text>
            <Text style={styles.header}>
                Customizable Habits:
            </Text>
            <Text>
            Create your own list of habits to track. Whether it's daily exercise, reading, or meditation, our app lets you tailor your habits to your lifestyle.
            </Text>
            <Text style={styles.header}>
                Streaks and Progress:
            </Text>
            <Text>
                Monitor your progress with streaks. 
                The longer you maintain a habit, the more rewarding it becomes. Celebrate your achievements and stay motivated!
            </Text>
            <Text style={styles.header}>
                Reminders and Notifications: 
            </Text>
            <Text>
                Set reminders for your habits. Our app will send you gentle nudges to keep you accountable throughout the day.
            </Text>
            <Text style={styles.title}>Associated License:</Text>
            {license_name.map((license) => (
                <Text>{license}</Text>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    constainer: {
        padding: 10,
        paddingBottom: 10
    },
    title: {
        fontSize: 30
    },
    header: {
        fontWeight: 'bold'
    }
})