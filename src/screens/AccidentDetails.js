import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Details = () => {
    const navigation = useNavigation()
    const [doa, setDoa] = React.useState('3-15-2023');
    const [time, setTime] = React.useState('12:33');
    const [severity, setSeverity] = React.useState('5');
    const [vehicle, setVehicle] = React.useState('3');
    const showAlert = () =>
    Alert.alert(
        '',
        'Accident details have been added successfully.',
    [{
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      }],
    {
      cancelable: true,
    },
  );

    return (
        <View style={styles.container}>
            <View style={styles.lineStyle} />
            <View style={{ flex: 0.2 }} />
            <Text style={styles.text}>Date of accident</Text>
            <TextInput
                style={styles.input}
                placeholder='DD-MM-YYYY'
                onChangeText={(val) => setDoa(val)} />
            <View style={{ flex: 0.09 }} />
            <Text style={styles.text}>Time of accident</Text>
            <TextInput
                style={styles.input}
                placeholder='HH:MM'
                onChangeText={(val) => setTime(val)} />
            <View style={{ flex: 0.09 }} />
            <Text style={styles.text}>Severity</Text>
            <TextInput
                style={styles.input}
                placeholder='out of 10'
                onChangeText={(val) => setSeverity(val)} />
            <View style={{ flex: 0.09 }} />
            <Text style={styles.text}>Number of Vehicles</Text>
            <TextInput
                style={styles.input}
                placeholder='for e.g. 3'
                onChangeText={(val) => setVehicle(val)} />
            <View style={{ flex: 0.2 }} />
            <TouchableOpacity
                    onPress={() => {
                        // handle onPress
                    }}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText} onPress={showAlert} >Add</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
};

export default Details
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        backgroundColor: '#fff',

    },
    text: {
        paddingHorizontal: 60,
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
    btn:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderwidth:1,
        backgroundColor:"#AA1111",
        width:250
      },
      btnText:{
        fontSize:17,
        lineHeight: 24,
        fontWeight: '600',
        color:'#fff'
      },

      formAction: {
        marginVertical: 24,
    },

});
