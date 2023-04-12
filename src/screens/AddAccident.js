
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { mapStyle} from "../global/mapStyle";
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps';
import * as Location from 'expo-location'
import React, {useState,useRef,useEffect} from 'react'
import { colors, parameters} from '../global/styles'
const SCREEN_WIDTH = Dimensions.get('window').width

const AddAccident = () => {
  const navigation = useNavigation()
  const [latlng,setLatLng]=useState({})
    const checkPermission=async()=>{
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if(hasPermission.status=='granted'){
            const permission = await askPermission();
            return permission
        }
        return true
    };
    const askPermission = async()=>{
        const permission = await Location.requestForegroundPermissionsAsync()
        return permission.status =='granted';
    };
    const getLocation = async()=>{
        try{
            const{granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
            const{
                coords:{latitude,longitude},
            }  =await Location.getCurrentPositionAsync();
            setLatLng({latitude:latitude,longitude:longitude})
        }catch(err){

        }
    };
    const _map=useRef(1);

    useEffect(()=>{
        checkPermission();
        getLocation()
        console.log(latlng)
    ,[]})
  return (
    <View>
      <View style={styles.mapcont}>
            <MapView ref={_map}
                     provider={PROVIDER_GOOGLE}
                     style={styles.map}
                     customMapStyle={mapStyle}
                     showsUserLocation={true}
                     followsUserLocation={true}>
            </MapView>
      </View>
      <View style={{ position: 'absolute', top: '90%', alignSelf: 'center',borderRadius:3 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('AccidentDetails')}>
          <View style={styles.btn}>
          <Text style={styles.btnText}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AddAccident
const styles = StyleSheet.create({

  map: {
    width: '100%',
    height: '100%',
  },
  btn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderwidth:1,
    backgroundColor:"#AA1111",
  },
  btnText:{
    fontSize:17,
    fontWeight: '600',
    color:'#fff'
}
});