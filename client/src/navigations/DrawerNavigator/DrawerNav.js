import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CustomDrawerNav from '../../components/CustomDrawerNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo, FontAwesome5, FontAwesome, Feather } from '@expo/vector-icons';

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
    <Drawer.Navigator drawerContent={props=> <CustomDrawerNav {...props}/>}
      screenOptions={{
      drawerActiveBackgroundColor: '#AA1111',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
      },
    }}
    initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
              //icon
              headerStyle: { backgroundColor: "#fff"},
              title: "Home",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              drawerIcon: ({color}) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Add Accident" component={AddAccidentFirst} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Add Accident",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              drawerIcon: ({color}) => (
                <FontAwesome5 name="car-crash" size={22} color={color} />
              ),
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Emergency" component={Emergency} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Emergency",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              drawerIcon: ({color}) => (
                <Feather name="phone-call" size={22} color={color} />
              ),
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Profile",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              drawerIcon: ({color}) => (
                <FontAwesome5 name="user-alt" size={22} color={color} />
              ),
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>
    </Drawer.Navigator>
  );
};


export default DrawerNav

