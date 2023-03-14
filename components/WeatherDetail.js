import { StyleSheet, View, Text, } from 'react-native'
import React from 'react'
import { DetailTile } from './DetailTile'
import data from '../data'

export default function WeatherDetail() {
  return (
    <View>
      <Text style={styles.text}>Detail</Text>
      <View style={styles.detailContainer}>
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={Math.round(data.current.feels_like)} />
        <DetailTile iconName="wi-humidity" title="Humidity" data={data.current.humidity} />
        <DetailTile iconName="wi-day-sunny" title="UV Index" data={Math.round(data.current.uvi)} />
        <DetailTile iconName="wi-cloud-down" title="Visibility" data={data.current.visibility} />
        <DetailTile iconName="wi-thermometer-exterior" title="Dew Point" data={Math.round(data.current.dew_point)} />
        <DetailTile iconName="wi-barometer" title="Pressure" data={data.current.pressure} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
      
      },
      detailContainer: {
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
})
