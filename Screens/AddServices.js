import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, Button, Platform,  Linking, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';

const  Add = ({ navigation }) => {
    function link() {
        Linking.openURL(
          "https://www.google.com/maps/search/flower+shop"
        )
      }
      function link2() {
        Linking.openURL(
          "https://www.google.com/maps/search/funeral+director"
        )
      }

    return (
      
        <View style={styles.container}>

<Image style={styles.ImageStyle} source={require('../assets/AddSer.png')}/>
  
          <TouchableOpacity  style={styles.ButtonLower} onPress={link}>
               <Text style={styles.BtnTxt}> Flowers Near Me </Text>
                </TouchableOpacity>

          <TouchableOpacity  style={styles.ButtonLower2} onPress={link2}> 
          <Text style={styles.BtnTxt}> Funderal Services Near Me </Text> 
          </TouchableOpacity> 
        </View>
      );
};
 







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECD7",
 
  

    display:'flex',
    
    alignItems:'center',

    
    },
    ButtonLower: {
        width: "70%",
        color: "#000",
        height: 52,
        backgroundColor: "#6E362A",

        marginTop: 300,
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
  
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowOpacity: 1,
        elevation: 4,
        position: "absolute",
        shadowRadius: 12,
        shadowOffset: { width: 1, height: 10 },
      },
      ButtonLower2: {
        width: "70%",
        color: "#000",
        height: 52,
        backgroundColor: "#6E362A",

        marginTop: 400,
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 1,
    elevation: 4,
    position: "absolute",
    shadowRadius: 12,
    shadowOffset: { width: 1, height: 10 },
      },
      BtnTxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#F5ECD7",
      },
      ImageStyle: {
        width: "100%",
  height: "20%",
      },
  }); 

  export default Add