import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      
      <WeatherSummary />

      <WeatherDetail />

      <WeatherHourly />
      
      
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
  Text: {
    color: '#fff'
  }
});
