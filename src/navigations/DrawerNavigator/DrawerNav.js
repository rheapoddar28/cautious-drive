import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

//Screens

import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import AddAccidentFirst from '../../screens/AddAccident';
import Profile from '../../screens/Profile'
import Emergency from '../../screens/EmergencyNew';

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


const DrawerNav = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
              //icon
              headerStyle: { backgroundColor: "#fff"},
              title: "Home",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Add Accident" component={AddAccidentFirst} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Add Accident",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Emergency" component={Emergency} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Emergency",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Profile",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Log Out" 
              onPress={showAlert} component={LoginScreen} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Log Out",
              headerShown:false,
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
    </Drawer.Navigator>
  );
};


export default DrawerNav

