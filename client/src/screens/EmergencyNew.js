import { View, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native';;
import { useNavigation } from '@react-navigation/native';



const Emergency = () => {

  const handleButtonClick = () => {
    Linking.openURL('tel:100');
  };
  const handleButtonClick1 = () => {
    Linking.openURL('tel:101');
  };
  const handleButtonClick2 = () => {
    Linking.openURL('tel:102');
  };

  
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}><TouchableOpacity onPress={handleButtonClick}>
          <Image style={styles.image} source={require("../../assets/p2.png")} />
        </TouchableOpacity></View>
        <View style={styles.box}><TouchableOpacity onPress={handleButtonClick1}>
          <Image style={styles.image} source={require("../../assets/fireb.png")} />
        </TouchableOpacity></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}><TouchableOpacity onPress={handleButtonClick2}>
          <Image style={styles.image} source={require("../../assets/ambulance.png")} />
        </TouchableOpacity></View>
        <View style={styles.box}><TouchableOpacity onPress={() => navigation.navigate('MechanicsMap')}>
          <Image style={styles.image1} source={require("../../assets/mech.png")} />
        </TouchableOpacity></View>
      </View>
    </View>
  )
};

export default Emergency
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  row: {
    flex: 1,
    flexDirection: 'row',

  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 98,
    width: 100,
    borderRadius: 5,

  },
  image1:{
    height: 85,
    width: 100,


  }
});


