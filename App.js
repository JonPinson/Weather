import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {useFonts} from 'expo-font'
import Icon from './weatherIcon';
import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';
import { WeatherDaily } from './components/WeatherDaily';
import data from './data';
import { Hour } from './components/Hour';

export default function App() {

  const [loaded] = useFonts (

    { icomoon: require('./assets/fonts/icomoon.ttf') }
  );

  if(!loaded) {
    return null;
  }

  

  return (
    <ScrollView style={styles.container}>
     
      
      <WeatherSummary />

      <WeatherDetail />

      <WeatherHourly />

      <WeatherDaily />
    
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
