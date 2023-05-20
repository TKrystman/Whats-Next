import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform,  Linking, TouchableOpacity, Image } from 'react-native';
import * as Calendar from 'expo-calendar';
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';


const  Intro = ({ navigation }) => {
let [isLoaded, setIsLoaded] = React.useState(false);

let cacheResources = async () => {
  const images = [
    require("../assets/appTop.png",),
    require("../assets/appMain.png"),
    require("../assets/images/tick.png"),
    require("../assets/images/VideoPlaceholder.png"),
    require("../assets/Screenshot1.png"),
    require("../assets/Screenshot2.png"),
    require("../assets/Screenshot3.png"),
    require("../assets/Flower.png"),
    require("../assets/Funeral.png"),
    require("../assets/AddSer.png"),
    require("../assets/images/HomeIc.png"),
    require("../assets/images/call.png"),
  ];
 
  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
    
  });

  return Promise.all(cacheImages);
}

React.useEffect(() => {
  const loadResources = async () =>{
    await cacheResources();
    setIsLoaded(true);
  };
  loadResources();
}, [])

    function link() {
        navigation.navigate("Home")
      }
      function link2() {
        navigation.navigate("HowToUse")
      }
      if (!isLoaded) {
        return <AppLoading /> //keeps app on loading screen untill assets are loaded 
      }
    return (
        <View style={styles.container}>
  <Image style={styles.ImageStyle} source={require('../assets/appMain.png')}/>
          <TouchableOpacity  style={styles.ButtonLower} onPress={link}>
               <Text style={styles.BtnTxt}> Enter </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.ButtonLower2} onPress={link2}>
               <Text style={styles.BtnTxt}> How To Use? </Text>
                </TouchableOpacity>

        </View>
      );
};
 







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9bea7',
    
    color:'#000',
    height:52,
    backgroundColor:'#dfd2bf',
    

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
    },
    ButtonLower: {
        width: "70%",
        color: "#000",
        height: 52,
        borderColor: "#6E362A",
        borderWidth: 5, borderRadius: 4,
        marginTop: 230,
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
        position: "absolute",
        bottom: "50%",
  transform: [{ translateY: 26 }],
      },
      ButtonLower2: {
        width: "70%",
        color: "#000",
        height: 52,
        borderColor: "#6E362A",
        borderWidth: 5, borderRadius: 4,
        marginTop: 100,
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
        position: "absolute",
        top: "50%",
  transform: [{ translateY: -26 }],
      },
      BtnTxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#6E362A",
      },
      ImageStyle:{
        width:'100%',
        resizeMode:'contain'
     },
  }); 

  export default Intro