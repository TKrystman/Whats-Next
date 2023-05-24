import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, TouchableOpacity, Image } from 'react-native';

const  Cal = ({ navigation }) => {
  //Navigate to the home.js page
  function  navigate() {
    navigation.navigate("Home")
  }

  return (
    
    <View style={styles.container}>
      
      <Image style={styles.ImageStyle2} source={require('../assets/Timeline.psd')}/>
     <Image style={styles.ImageStyle} source={require('../assets/CalTime.png')}/>
     <TouchableOpacity onPress={navigate} style={styles.CircleShapeView}>
         <Image
           style={styles.icon5}
           source={require("../assets/images/HomeIc.png")}
         />
       </TouchableOpacity>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    flexDirection: "column",

    alignItems: "center",
    backgroundColor: "#F5ECD7",
    height: "100%",
    },

    Button:{
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

    BtnTxt: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#6E362A",
    },

    ImageStyle: {
      width: "100%",
height: "27%",

    },
    ImageStyle2: {
      width:'130%',
      height:'30%',
      resizeMode:'contain',
      bottom:'5%',
    },
    CircleShapeView: {
      width: 80,
      height: 80,
      borderRadius: 180 / 2,
      backgroundColor: "#D9A24B",
   top:'20%',
      shadowColor: "rgba(0, 0, 0, 0.4)",
      shadowOpacity: 1,
      elevation: 4,
      shadowRadius: 12,
      shadowOffset: { width: 1, height: 10 },
    },
    icon5: {
      alignSelf: "center",
      top: "18%",
      width: 50,
      height: 50,
    },
    BotView: {
      width: "100%",
      height: "80%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
  })
  
  export default Cal