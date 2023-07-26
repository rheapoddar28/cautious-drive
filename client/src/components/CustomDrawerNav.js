import React, {useState,useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Entypo, FontAwesome5, FontAwesome, Feather } from '@expo/vector-icons';
import { colors, parameters} from '../global/styles'
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  const navigation = useNavigation()
  const showAlert = () =>
    Alert.alert(
        '',
        'Logged out.',
    [{
        text: 'OK', 
        onPress: () => console.log('Sign Out Pressed')
      }],
    {
      cancelable: true,
    },
  );
  return (
    <View style={{flex: 1, paddingTop:20,}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff', }}>
        <Image
            source={require('../../assets/logo2.png')}
            style={{height: 120, width: 140, marginBottom: 10, alignSelf: 'center'}}
          />
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 5}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
              onPress={()=>{navigation.navigate("Login"),showAlert }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;