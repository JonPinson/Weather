import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Day } from './Daily';

export const WeatherDaily = () => {
  return (
    <View>
      <Text style={styles.text}>Daily</Text>
        <View style={styles.dayContainer}>
          <Day  day={data.daily[0]} />
          <Day  day={data.daily[1]} />
          <Day  day={data.daily[2]} />
          <Day  day={data.daily[3]} />
          <Day  day={data.daily[4]} />
        </View>
    </View>
        

        
    
  )
}

const styles = StyleSheet.create({
  text: {
      color: '#fff',
    
    },
   dayContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  
  })