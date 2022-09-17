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
  FlatList
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class Home extends React.Component {

constructor(){
    super()
    this.state={
        data:[]
    }
}

fetchData=async()=>{
    axios
    .get('https://7b68-103-163-192-69.in.ngrok.io')
    
    .then((response)=>this.setState({data:response.data.Data}))

}
renderItem=({item,index})=>{
    return(
        <View style={{marginTop:RFValue(30)}}>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("detail",{data:item})
            }}>
            <Text style={styles.box}>
                {"Planet"+(index+1)+" :- "+item.name}
            </Text>
            </TouchableOpacity>
        </View>
    )
}   
componentDidMount(){
    this.fetchData();
}

  render(){
      return(
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.header}>
              <Text style={styles.headTxt}>Exoplanets</Text>
          </View>
          

          <View style={styles.catalog}>
            <FlatList data={this.state.data} renderItem={this.renderItem} />

            
          </View>
          
          
          
        </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03235F',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(20),
  },
  header:{
    backgroundColor:'#FF8D1A',
    width:'100%',
    // height:'9%',
    alignItems: 'center',
  },
  headTxt:{
    fontSize:RFValue(40),
  },
  catalog:{
    backgroundColor:"#FFF",
    width:"80%",
    height:"75%",
    borderRadius:RFValue(9),
    marginLeft:RFValue(40),
    marginTop:RFValue(40),
    padding:RFValue(20),
  },
  box:{
    fontSize:RFValue(20),
    borderColor:"Black",
    borderWidth:RFValue(1),
    borderRadius:RFValue(9),
    padding:RFValue(4)
  }
});
