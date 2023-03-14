import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { SizeConstants, ColorConstants } from '../globalStyles.js/globalStyles';
import { iconList } from '../weatherHelper';
import Icon from '../weatherIcon';
import data from '../data';


export const Day = ({day}) => {
  return (
    <View style={styles.tileContainer}>
      <Icon style={styles.icon} name={iconList[day.weather[0].id][0]} />
      <Text style={styles.detailText}>{Math.round(day.temp.max)}{'\u00b0'}F</Text>
      <Text style={styles.detailText}>{Math.round(day.temp.min)}{'\u00b0'}F</Text>
      <Text style={styles.detailText}>{day.pop*100}%</Text>
    </View>
)
}

const styles = StyleSheet.create({
tileContainer: {
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
width: '18%',
backgroundColor: '#333',
margin: 4,


},
detailText: {
color: 'white',
fontSize: 16
}

});

