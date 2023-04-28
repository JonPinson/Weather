import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ColorConstants, SizeConstants } from "../globalStyles"
import moment from "moment/moment";

import Icon from '../weatherIcon';
import { iconList, moonPhases } from '../weatherHelper';

const MoonTimes = ({data}) => {
    let moonrise = (data.daily[0].moonrise * 1000);
    let moonset = (data.daily[0].moonset * 1000);
    let moonphase = +data.daily[0].moon_phase * 28;
    moonphase = Math.round(moonphase);
    console.log(moonphase+ " "+ moonPhases[moonphase])

    let moonriseTime = moment(new Date(moonrise)).format('LT');
  let moonsetTime = moment(new Date(moonset)).format('LT');


  return (
    <>
        <Text style={styles.title}>Sunrise & Sunset</Text>
        <View style={styles.container}>
            <View style={styles.sunView}>
            <Text style={styles.info}>Current</Text>
                <Icon name={moonPhases[moonphase]} style={styles.icon} />
                <Text style={styles.title}>Current</Text>
            </View>
            <View style={styles.sunView}>
                <Text style={styles.info}>Moon Rise</Text>
                <Icon name="wi-moonrise" style={styles.icon} />
                <Text style={styles.title}>Full Moon</Text>
            </View>
            <View style={styles.sunView}>
                <Text style={styles.info}>Moon Set</Text>
                <Icon name="wi-moonset" style={styles.icon} />
                <Text style={styles.title}>New Moon</Text>
            </View>
        </View>
    </>
  )
}

export default MoonTimes



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        color: '#fff'
    },
    sunView: {
        width: '20%',
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