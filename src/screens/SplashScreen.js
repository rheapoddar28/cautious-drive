import { StyleSheet, Text, View, Dimensions, StatusBar, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
const SCREEN_WIDTH = Dimensions.get('window').width

export default function SplashScreen({navigation}) {
  return (
    <View style = {styles.container}>
        
      <View>
            <Image
                style = {styles.image1}
                source = {require('/Users/rhesaurus/my-app/assets/logo.png')}
                            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },

    image1:{
        height:200,
        width:SCREEN_WIDTH,
    }
})