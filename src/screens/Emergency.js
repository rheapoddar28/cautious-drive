import React from 'react';
import { View, StyleSheet } from 'react-native';

const Emergency = ({navigation}) => {
    return (
      <View>
         <View style={styles.lineStyle} />   
      </View>
    );
};

export default Emergency
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        backgroundColor: '#fff',

    },
    
    lineStyle: {
        borderWidth: 4,
        borderColor: '#AA1111',
    },

});
