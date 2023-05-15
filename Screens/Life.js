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






const Life = ({ navigation }) => {
 //Variables that can be used throughout the code.
 const [Points, setPoints] = useState(0)
 const [tickThree, setTickThree] = useState(false)
 const video = React.useRef(null)
 const [successMessage,setSuccessMessage]= useState('');
 const [Loading,setLoading]= useState(false);

 async function loadtick() {
  const tick = await AsyncStorage.getItem("tickThree")
  if (tick !== null) {
    setTickThree(tick)
  }
}

useEffect(() => {
  loadtick()
}, [])

async function on() {
  setTickThree("true")
  await AsyncStorage.setItem("tickThree", "true")

  setLoading(true);
  
  setSuccessMessage("Task Complete"); 
  setLoading(false);
  console.log(re);
}

 //Function to take the user home when it is called.
 function navigate() {
   navigation.navigate("Home")
 }

 function link() {
   Linking.openURL(
     "https://www.moneyhelper.org.uk/en/everyday-money/insurance/what-is-life-insurance"
   )
 }

 return (
   <View style={styles.container}>
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}> Life Insurence</Text>
     </View>
     <TouchableOpacity onPress={link} style={styles.link}>
       <Text style={styles.linkt}> Link </Text>
     </TouchableOpacity>
     <View style={styles.list}>
       <Video
         ref={video}
         style={styles.icon3}
         source={require("../assets/images/Football.mp4")}
         useNativeControls
       />

       <ScrollView style={styles.svs}>
         <Text style={styles.txtp}>
           {" "}
           1.When visiting the government website linked above. You are met
           with this webpage 
         </Text>
         <Image style={styles.ImageStyle} source={require('../assets/Screenshot1.png')}/>
         <Text style={styles.txtp}>
           2. Next, click ‘What to do with a passport when the passport holder
           has died’ under the ‘Documents’ section a file will download to your
           computer.
         </Text>
         <Text style={styles.txtp}>
           3. From here simply click the icon for the downloaded file and it
           will open. It is worth noting that it is good practice to be careful
           of most websites that download files to your computer but in the
           case of the government website we have linked there is nothing to
           worry about! (There is also the option on the site to request a
           version or format of the document that is more accessible to any
           needs that you may have.)
         </Text>
         <Image style={styles.ImageStyle} source={require('../assets/Screenshot2.png')}/>
         <Text style={styles.txtp}>
           4.The document itself is only three pages long. Seeing as it needs
           to be posted to the address included at the bottom of the final
           page.
         </Text>
         <Text style={styles.txtp}>
           5. You must now print the document.The option for printing is often
           found under the ‘file’ tab such as in Microsoft Word [*Show this*].
           When the document is printed, you can fill it out physically but if
           you need to fill it out on the computer this is also possible,
           however to post it you will still need to print it off. (If you do
           not have access to a printer, consider contacting the Citizens
           Advice Bureau.)
         </Text>
         <Image style={styles.ImageStyle} source={require('../assets/Screenshot3.png')}/>
         <Text style={styles.txtp}>
           5.5. In order to digitally edit documents you have downloaded, some
           programs such as Microsoft Word require you to ‘enable editing’ by
           clicking this button at the top of the screen. Upon clicking it, you
           are now able to type words into the page in order to fill in the
           details of the passport, yourself and the deceased. You can also
           alter how the document looks which could be useful as you can change
           the color of the background and text.
         </Text>
         <Text style={styles.txtp}>
           6.From here simply fill out the form digitally or physically before
           sending it off to the address enclosed in the document and the
           Passport Office should handle the rest.
         </Text>
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
   marginLeft: "20%",
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
 }
})




export default Life