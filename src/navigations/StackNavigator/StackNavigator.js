import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

//Screens
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import DrawerNav from '../DrawerNavigator/DrawerNav';
import AccidentDetails from '../../screens/AccidentDetails';



export default function StackNavigator({navigation}) {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  
  }, []);
  
  const Stack = createNativeStackNavigator();

  return (
    //<AddAccidentFirrst />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {showSplashScreen? (<Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>):null}
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown:false}}/>
        <Stack.Screen name="AccidentDetails" component={AccidentDetails} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Accident Details",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>

      </Stack.Navigator>    
    </NavigationContainer>
  );
}