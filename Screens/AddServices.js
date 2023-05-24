import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, Button, Platform,  Linking, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';

const  Add = ({ navigation }) => {

  //Navigate to flower shops via google maps
    function link() {
        Linking.openURL(
          "https://www.google.com/maps/search/flower+shop"
        )
      }
        //Navigate to funeral directors via google maps
      function link2() {
        Linking.openURL(
          "https://www.google.com/maps/search/funeral+director"
        )
      }
      //Navigate to the home.js page
      function  navigate() {
        navigation.navigate("Home")
      }
    return (
      
        <View style={styles.container}>

<Image style={styles.ImageStyle} source={require('../assets/AddSer.png')}/>
<Image style={styles.icon3} source={require('../assets/Flower.png')}/>
          <TouchableOpacity  style={styles.ButtonLower} onPress={link}>
               <Text style={styles.BtnTxt}> Flowers Near Me </Text>
                </TouchableOpacity>
                <Image style={styles.icon4} source={require('../assets/Funeral.png')}/>
          <TouchableOpacity  style={styles.ButtonLower2} onPress={link2}> 
          <Text style={styles.BtnTxt}> Funeral Services Near Me </Text> 
          </TouchableOpacity>

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
    backgroundColor: "#F5ECD7",
 
  

    display:'flex',
    
    alignItems:'center',

    
    },
    ButtonLower: {
        width: "70%",
        color: "#000",
        height: 52,
        backgroundColor: "#6E362A",

        marginTop: 370,
    
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

        marginTop: 650,
    
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
      icon3: {
        alignSelf: "center",
        top: "5%",
        width: 150,
        height: 200,
      },
      icon4: {
        alignSelf: "center",
        top: "10%",
        width: 150,
        height: 200,
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
  }); 

  export default Add