import { StyleSheet, View, Text, Image} from 'react-native'
import React from 'react'
import heroImage from '../assets/moon-Cloud-cropped.jpg';
import { FontConstants } from '../globalStyles.js/globalStyles';
import { SizeConstants } from '../globalStyles.js/globalStyles';
import { ColorConstants } from '../globalStyles.js/globalStyles';


export default function WeatherSummary({ data }) {

let windDirection = "";
let d = data.current.wind_deg;
switch (d) {
  case ( d>315 || d<45):
    windDirection = "North";
  case ( d>=45 && d<135):
    windDirection = "East";
  case ( d>=135 && d<225):
    windDirection = "South";
  case ( d>=225 && d<315):
    windDirection = "West";
}




  return (
    <View style={styles.heroContainer}>
      <Text style={styles.text}>Good Afternoon</Text>
      <Image source={heroImage} style={styles.hero} />
      <View style={styles.tempContainer}>
      <Text style={styles.highTemp}>{Math.round(data.daily[0].temp.max)}{'\u00b0'}F</Text>
        <Text style={styles.lowTemp}>{'\u2215'}{Math.round(data.daily[0].temp.min)}{'\u00b0'}F</Text>
      </View>
      <View>
        <Text style={styles.textLocation}>Huntington, WV</Text>
       {data.current.weather[0].main === "Clear" ? (<Text style={styles.textSmall}>Clear skies with a temperature of {Math.round(data.current.temp)}{'\u00b0'}F.</Text>) : (<Text>Partly cloudy with a temperature of {data.current.temp}</Text>)}
      <Text style={styles.textSmall}>Winds of {Math.round(data.current.wind_speed)} Mph from the {windDirection}.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: ColorConstants.normal,
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 8
    },

    textLocation: {
        color: 'white',
        fontSize: 30,


    },


    textSmall: {
        color: 'white',
        fontsize: 14

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