
import React,{useState,useRef,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

//Screens
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import DrawerNav from '../DrawerNavigator/DrawerNav';
import AccidentDetails from '../../screens/AccidentDetails';
//import RequestScreen from '../../screens/RequestScreen';
import DestinationScreen from '../../screens/DestinationScreen';
import MechanicsMap from '../../screens/MechanicsMap';



export default function StackNavigator({navigation}) {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  
  }, []);
  
  const Stack = createNativeStackNavigator();

  return (
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
        {/*<Stack.Screen name="RequestScreen" component={RequestScreen} options={{headerShown:false}}/>*/}
        <Stack.Screen name="DestinationScreen" component={DestinationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MechanicsMap" component={MechanicsMap} options={{
              headerStyle: { backgroundColor: "#fff"},
              title: "Nearby Mechanic Shops ",
              headerTintColor: '#AA1111',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 21, fontFamily: 'Roboto', fontWeight:'bold' },
            }}/>

      </Stack.Navigator>    
    </NavigationContainer>
  );
}