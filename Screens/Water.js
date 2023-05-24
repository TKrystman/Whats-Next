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

const Water = ({ navigation }) => {
 //Variables that can be used throughout the code.
 const [Points, setPoints] = useState(0)
 const [tickFour, setTickFour] = useState(false)
 const video = React.useRef(null)
 const [successMessage,setSuccessMessage]= useState('');
 const [Loading,setLoading]= useState(false);

 //loads the async variable for the fourth tick
 async function loadtick() {
  const tick = await AsyncStorage.getItem("tickFour")
  if (tick !== null) {
    setTickFour(tick)
  }
}

useEffect(() => {
  loadtick()
}, [])

//if this function is ran the variable for the fourth tick is set to true
async function on() {
  setTickFour("true")
  await AsyncStorage.setItem("tickFour", "true")

  setLoading(true);
  
      setSuccessMessage("Task Complete"); 
      setLoading(false);
      console.log(re);
}

 //Function to take the user home when it is called.
 function navigate() {
   navigation.navigate("Home")
 }

 //this link will take the user to the page to do with water bills
 function link() {
   Linking.openURL(
     "https://www.wessexwater.co.uk/your-account/your-bill/bereavement"
   )
 }

 //if this function is ran the variable for the fourth tick is set to false
 async function off() {
  setTickFour("false")
  await AsyncStorage.setItem("tickFour", "false")

  setLoading(false);

  
    setLoading(false);
    console.log(re);
      
}

 return (
   <View style={styles.container}>
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>Water Bills</Text>
     </View>
     <TouchableOpacity onPress={link} style={styles.link}>
       <Text style={styles.linkt}> Link </Text>
     </TouchableOpacity>
     <View style={styles.list}>
     <Image style={styles.icon3} source={require('../assets/images/VideoPlaceholder.png')}/>

       <ScrollView style={styles.svs}>
         <Text style={styles.txtp}>
           {" "}
           1.Before interacting with any of the website links make sure you have the following information for your 
           loved one/friend’s financial affairs: Details of the deceased including their address and the date of their 
           death, the Wessex Water customer number (if available), whether the property was owned or rented, an 
           update-to-date water metre reading (if available), the name, address and telephone number of the person 
           or executor who is legally looking after the affairs of the deceased. Whether water is still required 
           at the property.
         </Text>
    
         <Text style={styles.txtp}>
         2.When visiting the Wessex Water website scroll down and click contact us. 
         It will redirect to the next page.
         </Text>
         <Text style={styles.txtp}>
         3.Inform the utility company of your circumstances and provide them with your recent, 
         up-to-date readings. Following this, you will be sent a final bill up to the metre 
         readings you have given. Depending on whether your dead loved one was in debt or was owed money, 
         the balances can be paid to/from the estate.
         </Text>
        
         <Text style={styles.txtp}>
         Things to note: Number to call for customer support for Wessex Water:  0345 600 3600
         </Text>
         <TouchableOpacity style={styles.Button2}  onPress={off}>
        <Text style={styles.BtnTxt2}>Reset.</Text>
        </TouchableOpacity>
       </ScrollView>
       <View style={styles.items}></View>
     </View>

     <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.writeTaskWrapper}
     >
       <TouchableOpacity onPress={navigate} style={styles.CircleShapeView}>
         <Image
           style={styles.icon2}
           source={require("../assets/images/HomeIc.png")}
         />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => on()} style={styles.Button}>
         <Text style={styles.txtb}> Done </Text>
       </TouchableOpacity>
     </KeyboardAvoidingView>
     {
Loading== true?
<Complete/>
:
successMessage=="Task Complete"?
<Complete successMessage={successMessage} close={setSuccessMessage}/>
:
null
}
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
   top:'15%',
   marginLeft: "30%",
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
  width: "40%",
    color: "#000",
    height: 52,
    borderColor: "#6E362A",
    borderWidth: 5, borderRadius: 4,
    marginTop: 130,

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

export default Water