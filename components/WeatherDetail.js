import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function WeatherDetail() {
  return (
    <View>
      <Text style={styles.text}>WeatherDetail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
      }
})