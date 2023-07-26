import React from 'react'
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import * as Location from 'expo-location';


export default class MechanicsMap1 extends React.Component {

  state = {
    hasLocationPermission: false,
    latitude: 0,
    longitude: 0,
    mechanicList: []
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync() {

    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    if (granted) {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        hasLocationPermissions: true,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      alert('Location permission not granted');
    }
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {

      width: '100%',
      height: '100%',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderwidth: 1,
      backgroundColor: "#AA1111",
    },
    btnText: {
      fontSize: 17,
      fontWeight: '600',
      color: '#fff'
    },
    view1: {
      position: 'absolute', top: '90%', alignSelf: 'center', borderRadius: 3
    },
   
  });


  handlemechanicSearch = () => {
    console.log("here")
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const location = `location=${this.state.latitude},${this.state.longitude}`;
    const radius = '&radius=1000';
    const type = '&type=car_repair';
    const key = '&key=AIzaSyBKwpxeZ7kflUOJq225jKbcjiwlyvDtbNA';
    const mechanicSearchUrl = url + location + radius + type + key;
    fetch(mechanicSearchUrl)
      .then(response => response.json())
      .then(result => this.setState({ mechanicList: result }))
      .catch(e => console.log(e))
  }
  

  render() {
    console.log(this.state.mechanicList.results)
    return (
      <View >
      
            <MapView  style={this.styles.map}  
            showsUserLocation={true} 
            initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.020,
            longitudeDelta: 0.005
          }}>
           {this.state.mechanicList.results && this.state.mechanicList.results.map((mechanic) => (
              <Marker
                key={mechanic.place_id}
                coordinate={{
                  latitude: mechanic.geometry.location.lat,
                  longitude: mechanic.geometry.location.lng,
                }}
                title={mechanic.name}
                description={mechanic.vicinity}
              />
            ))}
          </MapView>
          <View style={this.styles.view1}>
          <TouchableOpacity onPress={() => this.handlemechanicSearch()}>
            <View style={this.styles.btn}>
              <Text style={this.styles.btnText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
     
     </View>
    );
  }
}


