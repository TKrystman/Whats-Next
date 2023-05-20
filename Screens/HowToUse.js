import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
  Image,
  ScrollView,
  Linking,
} from "react-native"
import { Video } from "expo-av"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Complete from './Complete';
import * as Calendar from 'expo-calendar';





const HowToUse = ({ navigation }) => {
 
  


  //Function to take the user home when it is called.
  function navigate() {
    navigation.navigate("Intro")
  }


  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>How To Use?</Text>
      </View>
    
      

        
          <Text style={styles.txtp}>
            We have created an app to help understand what to do after loss.
          </Text>
      
          <Text style={styles.txtp}>
          Topics such as legal documents, bills and funeral care. 
          This app helps keep tabs on different tasks with Embedded reminders that suit you.
          </Text>
          <Text style={styles.txtp}>
          Simply work through the list of topics provided, following the video and text tutorials. 
          Once you have completed a topic you can click “Done” to update your progress. 
           </Text>
        
          <Text style={styles.txtp}>
          Alternatively, when wait time between steps is needed there will be an option to set 
          calendar reminders to prompt you to check for any updates that may be sent to you. 
          </Text>
          <Text style={styles.txtp}>
          If you need an overview of the predicted timeframe see the calendar tab.
          </Text>
          <Text style={styles.txtp}>
          If you need any additional services such as funeral care and flower shops see the plus tab.
          </Text>
     
        <View style={styles.items}></View>
    

  
  
        <TouchableOpacity onPress={navigate} style={styles.Button}>
          <Text style={styles.txtb}> Done </Text>
        </TouchableOpacity>
  
  

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECD7",
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "#6E362A",
    fontSize: 36,
    fontWeight: "",
    top:'70%',
    marginLeft: "24%",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "blue",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
  list: {
    top: 110,
    width: "90%",
    height: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    left: "5%",
  },
  CircleShapeView: {
    width: 80,
    height: 80,
    borderRadius: 180 / 2,
    backgroundColor: "#D9A24B",

    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  icon2: {
    alignSelf: "center",
    top: "18%",
    width: 50,
    height: 50,
  },
  icon3: {
    alignSelf: "center",
    top: "5%",
    width: 330,
    height: 200,
  },
  txtp: {
    color: "#6b564e",

    fontSize: "15",
    fontWeight: "bold",
    alignSelf: "center",
    top: 60,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  txtb: {
    color: "#fff",

    fontSize: "25",
    fontWeight: "bold",
    alignSelf: "center",

    marginLeft: 30,
    marginRight: 30,
  },
  linkt:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#6E362A",
  },
  Button: {
    width: "50%",
    color: "#000",
    height: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9A24B",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 1,
    elevation: 4,
    borderRadius: 150 / 2,
    shadowRadius: 12,
    shadowOffset: { width: 1, height: 10 },
    top:'7%',
    left:'24%',
  },
  svs: {
    top: "5%",
  },
  link: {
    color: "#000",
    height: 52,
    borderColor: "#6E362A",
    borderWidth: 5, borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 
    position: "absolute",
    width: "50%",
    color: "#000",
    top: "15%",
    justifyContent: "center",
    left: "25%",
    
  },
  ImageStyle: {
    width: 300,
    height:190,
    top: "6%",
    left:"10%",
  },
  Button2:{
    width: "70%",
      color: "#000",
      height: 52,
      borderColor: "#6E362A",
      borderWidth: 5, borderRadius: 4,
      marginTop: 230,
  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   
      

  },

  BtnTxt2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#6E362A",
  },
})






export default HowToUse