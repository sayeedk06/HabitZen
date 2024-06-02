import { ScrollView, StyleSheet, Text, View } from "react-native";
import licenses from '../licenses.json'
import { GlobalStyles } from "../styles/global"
import packages from '../package.json'
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
    const globalStyles = GlobalStyles()
    return (
        <ScrollView style={[styles.constainer, globalStyles.container]}>
            <Text style={[styles.title, globalStyles.text]}>Introduction</Text>
            <Text style={globalStyles.text}>
                Welcome to our Habit Tracker App! Whether you're trying to 
                build new habits or break old ones, our app is here to support you on your journey. 
                With intuitive features and a user-friendly interface, you'll find it easy to stay on track and achieve your goals.
            </Text>
            <Text style={[styles.title, globalStyles.text]}>
            Key Features
            </Text>
            <Text style={[styles.header,globalStyles.text]}>
                Customizable Habits:
            </Text>
            <Text style={globalStyles.text}>
            Create your own list of habits to track. Whether it's daily exercise, reading, or meditation, our app lets you tailor your habits to your lifestyle.
            </Text>
            <Text style={[styles.header, globalStyles.text]}>
                Streaks and Progress(Feature coming soon):
            </Text>
            <Text style={globalStyles.text}>
                Monitor your progress with streaks. 
                The longer you maintain a habit, the more rewarding it becomes. Celebrate your achievements and stay motivated!
            </Text>
            <Text style={[styles.header,globalStyles.text]}>
                Reminders and Notifications(Feature coming soon): 
            </Text>
            <Text style={globalStyles.text}>
                Set reminders for your habits. Our app will send you gentle nudges to keep you accountable throughout the day.
            </Text>
            <Text style={[styles.title,globalStyles.text]}>Associated License:</Text>
            {license_name.map((license) => (
                <Text style={globalStyles.text}>{license}</Text>
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
        padding: 3,
        fontWeight: 'bold'
    },
    header: {
        fontWeight: 'bold'
    }
})