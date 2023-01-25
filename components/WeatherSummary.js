import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function WeatherSummary() {
  return (
    <View>
      <Text style={styles.text}>WeatherSummary</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
      }
})