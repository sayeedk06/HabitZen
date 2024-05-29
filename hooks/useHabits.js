import { useState, useEffect } from 'react';
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
  
    return data
  }

  export function useHabits() {
    const [loadingHabits, setLoadingHabits] = useState();
    const [habitData, setHabitData] = useState();
    const [habitError, setHabitError] = useState();

    useEffect(() => {
        (async () => {
            try {
                const data = await getData();
                // console.log(data)
                setData(data);
    
    
            }catch(e) {
                console.log("FETCH:"+ e)
    
            }
    
        }
    
        )();
    }, [])
  }