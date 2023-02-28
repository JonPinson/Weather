import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from '../weatherIcon'

export const DetailTile = ({iconName, title, data}) => {
  return (
    <View style={styles.tileContainer}>
        <Icon name={iconName} size={26} color={'white'} />
        <Text style={styles.detailText}>{title}</Text>
        <Text style={styles.detailText}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    backgroundColor: '#333',
    margin: 4
  },
  detailText: {
    color: 'white',
    fontSize: 16
  }
  
});