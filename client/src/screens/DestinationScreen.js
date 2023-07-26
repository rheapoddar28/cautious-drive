import React,{useRef,useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View,Dimensions,TouchableOpacity,} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { alertsAround } from '../global/data'
import { mapStyle} from "../global/mapStyle"
import * as Location from 'expo-location'
import { parameters} from '../global/styles'


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const points = [{latitude:27.800764,longitude:75.030986},
        {latitude:27.800764,longitude:75.030986},
        {latitude:27.800253,longitude:75.028279},
        {latitude: 27.802659,longitude:75.033335},
        {latitude:27.802659,longitude:75.033335},
        {latitude:27.803668958604984, longitude:75.03094426774594},
        {latitude:27.801273448089972, longitude:75.03460115194453},
        {latitude:27.803973930834527, longitude:75.0312099991676},
        {latitude:27.80133708232031, longitude:75.02913535653502},
        {latitude:27.80462957963012, longitude:75.03169204241966},
        {latitude:27.803668,longitude:75.030944},
        {latitude:27.803903,longitude:75.031209},
        {latitude:27.801337,longitude:75.029135},
        {latitude:27.804629,longitude:75.031692},
        {latitude:27.804629,longitude:75.031692},
        {latitude:27.803668,longitude:75.030944},
        {latitude:27.803668,longitude:75.030944},
        {latitude:27.802111, longitude:75.031562}]
const INITIAL_POSITION = {
  latitude: 27.8024223,
  longitude: 75.030685,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            fontWeight:'400',
            backgroundColor: '#ebebeb',
          },
        }}
        enablePoweredByContainer={false}
        placeholder={placeholder || ""}
        fetchDetails={true}
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "pt-BR",
          componentRestrictions: {country: "in"}
        }}
        
      />
    </>
  );
}

const props = {
  label: 'Some label',
  placeholder: 'Some placeholder',
  onPlaceSelected: (details) => console.log(details),
};


InputAutocomplete(props);

export default function DestinationScreenNew({navigation}) {
const [origin, setOrigin] = useState(null);
const [destination, setDestination] = useState(null);
const [showDirections, setShowDirections] = useState(false);
const [confirmPressed, setConfirmPressed] = useState(false);
const [distance, setDistance] = useState(0);
const [duration, setDuration] = useState(0);



useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    Location.watchPositionAsync({
      accuracy: Location.Accuracy.High,
      timeInterval: 1000, 
      distanceInterval: 10, 
    }, (newLocation) => {
      setOrigin(newLocation.coords);
    });
  })();
}, []);

   
    const askPermission = async()=>{
        const permission = await Location.requestForegroundPermissionsAsync()
        return permission.status =='granted';
    };
  

  const mapRef = useRef(null);

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding: edgePadding });
    }

  }

  const handleConfirmPress = () => {
    setConfirmPressed(true);
  };

  const onPlaceSelected = (
    details,
    flag
  ) => {
    if (flag === 'destination') {
      const position = {
        latitude: details?.geometry.location.lat || 0,
        longitude: details?.geometry.location.lng || 0,
      };
    setDestination(position);
    moveTo(position);
  };
};

  return (
    <View style={styles.container}>
      
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        customMapStyle ={mapStyle}
        showsUserLocation = {false}
        followsUserLocation = {true}
        >
        {alertsAround.map((item,index)=>
        <Marker coordinate = {item} key= {index.toString()}>
            <Image 
                source = {require('../../assets/alert.png')}
                style ={styles.alertsAround}
                resizeMode = "cover"
            />
        </Marker>
                            
        )}

    
        {origin && <Marker coordinate={origin} image={require('../../assets/carMarker.png')} />}
        {destination && <Marker coordinate={destination}
         //image={require('../../assets/flagged.png')} 
         />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="#aa1111"
            strokeWidth={4}
            onReady={traceRouteOnReady} 
          />
        )}

      </MapView>
      
      <View style={styles.searchContainer}>
        <InputAutocomplete
          label="Where To?"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
        traceRoute();
        handleConfirmPress();
      }} >
          <Text style={styles.buttonText}>Confirm Location</Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:parameters.statusBarHeight,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 2*Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: "#aa1111",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  renderButtonView: {
    position: "absolute",
    width: "30%",
    padding: 8,
    bottom: Constants.statusBarHeight,
  },
  renderButton: {
    height:30,
    justifyContent:'center',
    backgroundColor: "#aa1111",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color:'#ebebeb',
    fontWeight:'400',
  },
  alertsAround: {
    width: 16,
    height: 18,
    
    },
});