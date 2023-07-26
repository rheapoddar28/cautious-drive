import React,{useState,useRef,useEffect} from 'react'
import StackNavigator from './src/navigations/StackNavigator/StackNavigator';
import { DestinationContextProvider, OriginContextProvider } from './src/contexts/contexts';
import { StyleSheet, View } from 'react-native';


export default function App() {
  return(
    <StackNavigator />
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})