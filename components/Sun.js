import { View, Text, StyleSheet } from "react-native"
import { ColorConstants, SizeConstants } from "../globalStyles"
import moment from "moment/moment";

import Icon from '../weatherIcon';
import { iconList } from '../weatherHelper';

export const SunTimes = ({ data }) => {
  let sunrise = (data.current.sunrise * 1000);
  let sunset = data.current.sunset * 1000;

  let sunriseTime = moment(new Date(sunrise)).format('LT');
  let sunsetTime = moment(new Date(sunset)).format('LT');



  return (
    <>
        <Text style={styles.title}>Sunrise & Sunset</Text>
        <View style={styles.container}>
            <View style={styles.sunView}>
            <Text style={styles.info}>Sunrise</Text>
                <Icon name="wi-sunrise" style={styles.icon} />
                <Text style={styles.title}>{sunriseTime}</Text>
            </View>
            <View style={styles.sunView}>
                <Text style={styles.info}>Sunset</Text>
                <Icon name="wi-sunset" style={styles.icon} />
                <Text style={styles.title}>{sunsetTime}</Text>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        color: '#fff'
    },
    sunView: {
        width: '35%',
        minHeight: 120,
        backgroundColor: ColorConstants.backgroundDark,
        borderRadius: SizeConstants.borderRadius,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        color: 'lightblue',
        fontSize: 58
    },
    info: {
        color: 'white',
        fontSize: 14
    },


})