import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Hour} from './Hour'


export default function WeatherHourly() {
  return (
    <View>
      <Text style={styles.text}>Hourly</Text>
      <FlatList 
        horizontal
        data={data.hourly}
        renderItem={({item}) => <Hour hour={item}/> }
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
      }
})