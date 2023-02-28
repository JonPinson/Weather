import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from '../weatherIcon'

export const DetailTile = ({iconName, title, data}) => {
  return (
    <View style={styles.tileContainer}>
        <Icon name={iconName} />
        <Text>{title}</Text>
        <Text>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%'
  }
});