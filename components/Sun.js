import React from 'react'
import { StyleSheet } from 'react-native'

export const Sun = () => {
  return (
    <View styles={styles.sunTable}>
        <Text>Sunrise</Text>
        <Text>Sunset</Text>
        <Text>MoonPhase</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    text: {
        color: '#fff'
      },

    sunTable: {
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }

    }
)