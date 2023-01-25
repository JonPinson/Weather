import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WeatherHourly() {
  return (
    <View>
      <Text style={styles.text}>WeatherHourly</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
      }
})