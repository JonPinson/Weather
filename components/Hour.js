import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { SizeConstants, ColorConstants } from '../globalStyles.js/globalStyles';

export const Hour = ({hour}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.info}>
            {hour.pop}%
        </Text>
        <Text style={styles.info}>
            {hour.temp}
        </Text>
        <Text style={styles.info}>
            {hour.weather[0].main}
        </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: ColorConstants.backgroundMedium,
        borderRadius: SizeConstants.borderRadius,
        marginRight: SizeConstants.paddingSmall,
        padding:SizeConstants.paddingRegular,
        alignItems: 'center'
    },
    info: {
        color: 'white',
        fontSize: 24
    }
})
