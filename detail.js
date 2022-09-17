import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
var image="../assets/neptune_like.png"
export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }
  getData = () => {
    this.setState({
      data: this.props.navigation.getParam("data"),
    });
  };
  
//   getImg=() => {
//     if (this.state.data.planet_type==="Gas Giant"){
//         image='../assets/gas_giant.png'
//     }else if (this.state.data.planet_type==="Terrestrial"){
//         image='../assets/terrestrial.png'
//     }else if (this.state.data.planet_type==="Super Earth"){
//         image='../assets/super_earth.png'
//     }else if (this.state.data.planet_type==="Neptune-like"){
//         image='../assets/neptune_like.png'
//     }
// }
  componentDidMount() {
    this.getData();
  }
  render() {
    // console.log(this.props.navigation.getParam("data"))
    console.log(this.state.data);



    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={require(image)}
                style={styles.img}
            />
            {/* <Image
                source={require('../assets/neptune_like.png')}
                style={styles.img}
            /> */}
        </View>
        <View style={styles.dataCont}>
          <Text style={styles.dataTxt}>
            {"Distance from earth: " + this.state.data.distance_from_earth}
          </Text>
          <Text style={styles.dataTxt}>
            {"Distance from their sun: " +
              this.state.data.distance_from_their_sun}
          </Text>
          <Text style={styles.dataTxt}>
            {"Gravity: " + this.state.data.gravity}
          </Text>
          <Text style={styles.dataTxt}>{"Name: " + this.state.data.name}</Text>
          <Text style={styles.dataTxt}>
            {"Orbital Period:" + this.state.data.orbital_period}
          </Text>
          <Text style={styles.dataTxt}>
            {"Orbital Speed:" + this.state.data.orbital_speed}
          </Text>
          <Text style={styles.dataTxt}>
            {"Planet Mass:" + this.state.data.planet_mass}
          </Text>
          <Text style={styles.dataTxt}>
            {"Planet Radius:" + this.state.data.planet_radius}
          </Text>
          <Text style={styles.dataTxt}>
            {"Planet Type:" + this.state.data.planet_type}
          </Text>
          <Text style={styles.dataTxt}>
            {"Specifications:" + this.state.data.specifications}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03235F",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  dataCont: {
    borderWidth: 1,
    borderRadius:RFValue(10),
    backgroundColor:"#AB9A16",
    padding:RFValue(10),
    
  },
  dataTxt:{
    fontSize:RFValue(20), 
    margin:RFValue(10),
  },imageContainer:{
    // height:RFValue()
    margin:RFValue(10),
    
  },
  img:{
    height:RFValue(150),
    width:RFValue(300),
    borderRadius:RFValue(10),
  }
});
