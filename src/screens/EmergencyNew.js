import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Emergency = () => {
    return (

        <View style={styles.container}>
            <View style={styles.imgd}>
                <Image style={styles.ImageStyle} source={require("../../assets/call.png")}></Image></View>
            <View style={styles.imgd1}>
                <Image style={styles.ImageStyle} source={require("../../assets/p2.png")}></Image></View>
            <View style={styles.imgd2}>
                <Image style={styles.ImageStyle} source={require("../../assets/save.png")}></Image></View>
            <View style={styles.imgd3}>
                <Image style={styles.ImageStyle1} source={require("../../assets/amb.png")}></Image></View>
            <View style={styles.hori} />
            <View style={styles.veri} />
            <Icon> </Icon>
        </View>
    )
};

export default Emergency
const styles = StyleSheet.create({


    hori: {
        borderWidth: 1,
        borderColor: '#AA1111',
        width: 500,
        position: 'absolute',
        top: '50%'
    },
    veri: {
        borderWidth: 1,
        borderColor: '#AA1111',
        height: 1000,
        position: 'absolute',
        left: '50%'
    },


    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
    },

    verticleLine: {
        height: 700,
        width: 2,
        backgroundColor: '#AA1111',

    },
    ImageStyle: {
        width: 80,
        height: 80,
       
    },
    imgd: {
        alignSelf: 'flex-start',
        paddingTop: 150,
        paddingLeft:45,
        paddingBottom: 10,
        marginTop:30
    },
    imgd1: {
        alignSelf:'flex-start',
        paddingTop:0,
        paddingLeft:240,
        paddingBottom: 10
    },
    imgd2: {
        alignSelf: 'flex-start',
        paddingTop:260,
        paddingLeft:240,
        paddingBottom:0

    },
    imgd3: {
        alignSelf:'flex-start',
        paddingTop:0,
        paddingLeft:40,
        paddingBottom: 190

    },
    ImageStyle1:{
        height:90,
        width:120

    }    
});
