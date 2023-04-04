import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { WEATHER_API } from '@env'
// import data from './data';
import axios from 'axios';
import Icon from './weatherIcon';
import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';
import { WeatherDaily } from './components/WeatherDaily';
import { Hour } from './components/Hour';
import { Sun } from './components/Sun';


export default function App() {

  const [data, setData] = useState(null);

  useEffect( () => {
    let temp = WEATHER_API;
    console.log(temp);

    axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=38.419&lon=-82.445&units=imperial&appid='+WEATHER_API)
    .then((response) => {
      console.log(response);
      setData(response.data);
    }).catch((error) => {
      console.log(error)
    });
  }, [] )

  const [loaded] = useFonts (

    { icomoon: require('./assets/fonts/icomoon.ttf') }
  );

  if(!loaded) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
     
      
      <WeatherSummary data={data} />

      <WeatherDetail data={data} />

      <WeatherHourly data={data} />

      <WeatherDaily data={data} />

      <Sun data={data} />
    
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
 //   alignItems: 'center',
 //   justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 75
  },

  icon: {
    color: '#fff',
    fontSize: 74
  }
});
