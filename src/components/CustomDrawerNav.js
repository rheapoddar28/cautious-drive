import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import { Entypo, FontAwesome5, Feather } from '@expo/vector-icons';

import { colors, parameters} from '../global/styles'
import { StatusBar } from 'expo-status-bar';


export default function CustomDrawerNav() {

    const [selectedId, setSelectedId] = useState();

    const listArray = [
        {icon: '<Entypo name="home" size={24} color="black" />', title:'Home'},
        {icon:'<FontAwesome5 name="car-crash" size={24} color="black" />', title:'Add Accident'},
        {icon: '<Feather name="alert-octagon" size={24} color="black" />', title:'Emergency'},
];

const bottomList = [
    {icon: '<Entypo name="home" size={24} color="black" />', title:'LogOut'},
    {icon:'<FontAwesome5 name="car-crash" size={24} color="black" />', title:'Share'},
];


const Item = ({title, icon, onPress, backgroundColor, color}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor: backgroundColor}]}>
      <Entypo name="home" size={24} color="black" />
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );

  
  
  const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';
        const color = item.id === selectedId ? 'white' : 'black';
        return <Item 
                    onPress={()=> setSelectedId(item.id)}
                    title={item.title}
                    icon={item.icon}
                    backgroundColor={backgroundColor}
                    color = {color} />;
        
  };
  
  return (
    <View style = {styles.container} >
        <View style = {styles.top} >
            <Image style = {styles.image1} source = {require('../../assets/logo.png')}></Image>
            <Text style = {{fontWeight:'bold', fontSize:16, marginTop:10,marginBottom:10,}}>Psych Coders</Text>
        </View>
        <View style = {styles.middle} >
            <FlatList
                data={listArray}
                renderItem={({item}) => <Item title={item.title} icon={item.icon} />}
                keyExtractor={item => item.id}
      />
        </View>
        <View style = {styles.bottom} >
        <FlatList
                data={bottomList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
      />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: parameters.statusBarHeight,
    },

    top:{
        flex:0.2,
        paddingTop:50,
        paddingHorizontal:20,
        //backgroundColor:colors.grey4,
    },

    middle:{
        flex:0.6,
        //backgroundColor:colors.grey3,
    },

    bottom:{
        flex:0.2,
        //backgroundColor:colors.grey2,

    },
    
    image1:{
        height:100,
        width:100,
        borderRadius:50,
    },

    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:"row",
        justifyContent:"space-between",
      },

      imageContent:{
        height:30,
        width:30,
        borderRadius:50,
    },

      title: {
        fontSize: 16 ,
      },
})