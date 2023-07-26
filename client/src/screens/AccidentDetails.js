import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert,ScrollView,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Details = () => {
    const navigation = useNavigation()
    const [date_time, setDateTime] = useState('');
    const [latitude, setLat] = useState('');
    const [longitude, setLong] = useState('');
    const [area, setArea] = useState('');
    const [cause, setCause] = useState('');


    const postData = () => {
        fetch("http://192.168.29.9:12000/accidentdetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date_time,
                latitude,
                longitude,
                area,
                cause,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // If the data was successfully stored in MongoDB, we can show a success message to the user
                navigation.navigate('DrawerNav');
                window.alert("Thank you for enhancing our database");
            })
            .catch((error) => {
                console.error(error);
                // If there was an error in storing the data in MongoDB, we can show an error message to the user
                window.alert("Failed to add data");
            });
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.lineStyle} />
            <Text style={styles.text}>Date and Time of accident</Text>
            <TextInput
                style={styles.input}
                placeholder='YYYY-mm-ddTHH:MM:ss'
                onChangeText={(val) => setDateTime(val)} />
    
            <Text style={styles.text1}>Latitude</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. 27.3334'
                onChangeText={(val) => setLat(val)} />
          
            <Text style={styles.text1}>Longitude</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. 27.3334'
                onChangeText={(val) => setLong(val)} />
        
            <Text style={styles.text1}>Area</Text>
            <TextInput
                style={styles.input}
                placeholder='for e.g. Tapovan'
                onChangeText={(val) => setArea(val)} />

            <Text style={styles.text1}>Cause</Text>
            <TextInput
                style={styles.input}
                placeholder='for e.g. High Speed'
                onChangeText={(val) => setCause(val)} />

            <TouchableOpacity
                onPress={() => {
                    postData()
                }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default Details
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexBasis:0,
        flexShrink:1,
        padding: 2,
        backgroundColor: '#fff',


    },
    text: {
        paddingTop:30,
        paddingHorizontal: 65,
        color: '#000',
        fontSize: 17,
        fontFamily: "Roboto",
    },
    text1:{
        paddingTop:6,
        paddingHorizontal: 65,
        color: '#000',
        fontSize: 17,
        fontFamily: "Roboto",
    },
    heading: {
        alignItems: 'center',
        backgroundColor: '#555555',
        padding: 30,
    },
    lineStyle: {
        borderWidth: 4,
        borderColor: '#AA1111',
    },
    input: {
        padding: 8,
        margin: 10,
        width: 230,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: "#EBEBEB",
        fontSize: 14
    },
    btn: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        marginTop:15,
        paddingHorizontal: 15,
        borderwidth: 1,
        backgroundColor: "#AA1111",
        width: 250
    },
    btnText: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        color: '#fff'
    },

    formAction: {
        marginVertical: 24,
    },

});
