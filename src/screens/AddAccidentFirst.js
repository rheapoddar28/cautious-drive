import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, {useState,useRef,useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'
import { mapStyle} from "/Users/rhesaurus/my-app/src/global/mapStyle"
import * as Location from 'expo-location'
import { colors, parameters} from '/Users/rhesaurus/my-app/src/global/styles'
const SCREEN_WIDTH = Dimensions.get('window').width



const AddAccidentFirst = ({navigation}) => {
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
    <View style = {styles.container}>
        <View style={styles.mapcont}>
            <MapView ref={_map}
                     provider={PROVIDER_GOOGLE}
                     style={styles.map}
                     customMapStyle={mapStyle}
                     showsUserLocation={true}
                     followsUserLocation={true}>
            </MapView>
        </View>
        <View style = {styles.view1}>
        <TouchableOpacity onPress ={()=>{navigation.navigate("",{state:0})}}>
            <View style ={styles.button1}>
                <Text style = {styles.button1Text}>Next</Text>
            </View>
        </TouchableOpacity>
        </View>

    </View>
  )
}

export default AddAccidentFirst

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ebebeb",
        paddingBottom: parameters.statusBarHeight*0.5,
        paddingTop: parameters.statusBarHeight,
    },
    map:{
        height:'100%',
        width: '100%',
    },
    mapcont:{
        height: '100%',
        alignSelf:"center",
        overflow:"hidden",
        width:SCREEN_WIDTH,
        marginTop:0,
        borderRadius:0,
        borderWidth:0,
        alignItems:"center",
        justifyContent:"center",
      },
    button1:{
        height:50,
        width:170,
        backgroundColor:colors.red,
        borderRadius:20,
        alignItems:"center",
        //alignSelf:"center",
        justifyContent:"center",
        marginTop:310,
        marginRight:"50%",
        position:'absolute',
      },
      button1Text:{
        color:colors.white,
        fontSize:20,
      },
      view1:{
        width:'100%',
        height:'100%',
        alignItems:"center",
        justifyContent:"center",
        position:'absolute',
        marginRight:"60%",
      },

})