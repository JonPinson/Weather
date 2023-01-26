import { StyleSheet, View, Text, Image} from 'react-native'
import React from 'react'
import heroImage from '../assets/moon-Cloud-cropped.jpg';


export default function WeatherSummary() {
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.text}>Good Afternoon</Text>
      <Image source={heroImage} style={styles.hero} />
      <View style={styles.tempContainer}>
        <Text style={styles.highTemp}>46{'\u00b0'}F</Text>
        <Text style={styles.lowTemp}>/33{'\u00b0'}F</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 8
    },

    tempContainer: {
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },

    highTemp:{
        color: 'white',
        fontSize:48,
        fontWeight: '100',
        marginRight: 8
    },

    lowTemp: {
        color: 'lightblue',
        fontSize:33,
        fontWeight: '100'
    },

    heroContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
      },

    hero: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 20,
      resizeMode: 'cover'

      }
})