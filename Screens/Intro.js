import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform,  Linking, TouchableOpacity, Image } from 'react-native';
import * as Calendar from 'expo-calendar';

const  Intro = ({ navigation }) => {
    function link() {
        navigation.navigate("Home")
      }
      

    return (
        <View style={styles.container}>
  <Image style={styles.ImageStyle} source={require('../assets/appMain.png')}/>
          <TouchableOpacity  style={styles.ButtonLower} onPress={link}>
               <Text style={styles.BtnTxt}> Enter </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.ButtonLower2} onPress={link}>
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