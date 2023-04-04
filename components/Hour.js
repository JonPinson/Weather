import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { SizeConstants, ColorConstants } from '../globalStyles.js/globalStyles';
import { iconList } from '../WeatherHelper';
import Icon from '../weatherIcon';

export const Hour = ({hour}) => {

let meridian = '';
let index = 0;
let dt = new Date(hour.dt * 1000);
let hours = dt.getHours();

if(hours > 7 && hours < 20) {
    index = 0;
} else {
    index = 1;
}
if(hours > 12) {
    hours = hours - 12;
    meridian = "PM";
} else {
    meridian = "AM"
}
if(hours === 0 ) hours = 12;


  return (
    <View style={styles.container}>
        <Icon style={styles.icon} name={iconList[hour.weather[0].id][0]} />
        <Text style={styles.info}>
            {hour.pop}%
        </Text>
        <Text style={styles.info}>
            {Math.round(hour.temp)}{'\u00b0'}F
        </Text>
        <Text style={styles.info}>
            {hour.weather[0].main}
        </Text>
        <Text style={styles.littleinfo}>
            {hours}:00 {meridian}
        </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        width: 70,
        backgroundColor: ColorConstants.backgroundDark,
        borderRadius: SizeConstants.borderRadius,
        marginRight: SizeConstants.paddingSmall,
        padding:SizeConstants.paddingRegular,
        alignItems: 'center'
    },
    info: {
        color: 'white',
        fontSize: 14
    },
    icon: {
    color: 'lightblue',
    fontSize: 58,
    },

    littleinfo: {
        fontSize: 10,
        color: 'white'
    
}
})
