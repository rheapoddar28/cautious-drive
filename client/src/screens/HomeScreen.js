import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { colors, parameters} from '../global/styles'
import * as Location from 'expo-location'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height



const HomeScreen = ({navigation}) => {

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
    const Drawer = createDrawerNavigator();

    useEffect(()=>{
        checkPermission();
        getLocation()
        console.log(latlng)
    ,[]})
    
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <View>
            <View style={styles.home}>
                <Text style={styles.text1}>Make Safety a Priority on the Road!</Text>
                <View style={styles.view1}>
                    <View style={styles.view8}>
                        <Text style={styles.text2}>Avoid careless driving with us.</Text>
                        <View>
                        <View style={styles.roadleft}></View>
                        <View style={styles.roadright}></View>
                        <Image
                            style = {styles.image1}
                            source = {require('../../assets/road5.png')}
                        />
                        <View style = {styles.view10}>
                        <TouchableOpacity onPress={()=>navigation.navigate('DestinationScreen')}>
                            <View style ={styles.button1}>
                                <Text style = {styles.button1Text}>Start the drive.</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                        </View>                
                    </View>                   
                </View>
            </View>
        </View>
        <Image
            style = {styles.image2}
            source = {require('../../assets/vehicle.png')}
        />
      <StatusBar style = "dark" backgroundColor = "#ebebeb" translucent={true}/>
      {/*<View style = {styles.view3}>
        <TextInput style={styles.textinput1}
                   placeholder='Where To?'/>
        <View style = {styles.view4}>
            <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>*/}
    </View>
    </View>
  )
}
 
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        //paddingBottom: parameters.statusBarHeight*0.5,
        //paddingTop: parameters.statusBarHeight,
       // alignItems: "center",
      //  justifyContent: "center",
      },
    
      header:{
        backgroundColor: colors.red,
        height: parameters.headerHeight,
        alignItems:"flex-start",
      },
      image1:{
        marginTop:170,
        height:350,
        width:'100%',
        paddingRight:-100,
        position:'absolute',
      },
    
      /*image2:{
        marginTop:"90%",
        height:40,
        width:,
        overflow:"visible",
        alignSelf:"center",
        //borderRadius:30,
        position:'absolute',
      },*/
      image2:{
        marginLeft:150,
        marginTop:330,
        position:'absolute',
        transform: [{ rotate: '347deg'}]
      },
    
      home:{
        paddingTop:0,
        backgroundColor: colors.red,
        height:420,
        width:SCREEN_WIDTH,
        justifyContent: "space-between",
      },
    
      text1:{
        paddingTop:50,
        color:colors.white,
        fontSize:20,
        marginLeft:27,
        paddingBottom:10,
        fontWeight:"bold",
      },
    
      text2:{
        color:colors.white,
        fontSize:14,
        //paddingTop:20,
        marginTop:10,
        marginLeft:30,
      },

      textinput1:{
        color:colors.black,
        fontSize:16,
        //marginLeft:38,
        //paddingBottom:10,
        //paddingTop:20,
      },

    
      view1:{
        flexDirection:"row",
        flex:4,
        paddingTop:50,
        backgroundColor: colors.red,
      },
    
      button1:{
        height:50,
        width:170,
        backgroundColor:colors.red,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:410,
        marginLeft:150,
        position:'absolute',
      },
    
      button1Text:{
        color:colors.white,
        fontSize:17,
        marginTop:-2,
      },

      card:{
        alignItems:"center",
        margin:SCREEN_WIDTH/22
      },
    
      view2:{
        marginBottom:5,
        borderRadius:15,
        backgroundColor: colors.grey6,
      },
    
      title:{
        color:colors.black,
        fontSize:16,
      },
    
      view3:{
        flexDirection:"row",
        height:48,
        backgroundColor: colors.grey6,
        alignItems:"center",
        justifyContent:"space-between",
        alignSelf:"center",
        borderWidth:4,
        paddingLeft:20,
        paddingRight:5,
        borderColor:'#ebebeb',
        borderRadius:6,
        marginTop:310,
        position:'absolute',
        height:SCREEN_HEIGHT*0.063,
        width:SCREEN_WIDTH*0.85,
      },
    
      text3:{
        marginLeft:15,
        fontSize:20,
        color:colors.black,
      },
    
      view4:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
        backgroundColor:colors.grey6,
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:20,
      },
    
      view5:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        paddingVertical:25,
        justifyContent:"space-between",
        marginHorizontal:15,
        borderBottomColor: colors.grey4,
        borderBottomWidth:1,
        flex:1,
      },
    
      view6:{
        alignItems:"center",
        flex:5,
        flexDirection:"row",
      },
    
      view7:{
        backgroundColor:colors.grey6,
        height:40,
        width:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginRight:20,
      },
    
      map:{
        //marginVertical:0,
        height:'100%',
        width: '100%',
        position:'absolute',

      },
      mapcont:{
        height: SCREEN_HEIGHT*0.3,
        alignSelf:"center",
        overflow:"hidden",
        width:SCREEN_WIDTH,
        marginTop:'100%',
        alignItems:"center",
        justifyContent:"flex-end",
        position:'absolute',
      },
    
      text4:{
        fontSize:20,
        color: colors.black,
        marginLeft:10,
        marginBottom:20,
      },
    
      icon1:{
        marginLeft:10,
        marginTop:15, 
      },
    
      view8:{
        flex:1,
        marginTop:-50,
      },
    
      carsAround:{
        width:28,
        height:14,
      },
    
      location:{
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:colors.red,
        alignItems:"center",
        justifyContent:"center",
      },
    
      view9:{
        width:4,
        height:4,
        borderRadius:2,
        backgroundColor:"white",
      },
      view10:{
        //alignItems:"center",
        position:'absolute',
        flexDirection:"row",
        justifyContent: "space-between"
      },
      roadleft:{
        backgroundColor:colors.red,
        height:52,
        marginTop:300,
        width:SCREEN_WIDTH*0.6,
        justifyContent:"flex-start",
        position:'absolute',
      },
      /*roadright:{
        backgroundColor:colors.white,
        height:15,
        marginTop:65,
        marginLeft:SCREEN_WIDTH*0.95,
        width:SCREEN_WIDTH*0.1,
        position:'absolute',
      },*/
      image2box:{
        alignContent:"center",
        justifyContent:"center",
        position:'absolute',
      }       
})