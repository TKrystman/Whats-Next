import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard,  FlatList, Image, ScrollView, Linking} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';









const Life = ({ navigation }) => {
//Variables that can be used throughout the code.   
const [Points, setPoints] = useState(0);
const [tickOne, setTickOne] = useState(false);



useEffect (() => {
  async function loadtick() {
      const tick = await AsyncStorage.getItem('tickOne');
      
      if (tick !== null) {
          setTickOne(tick === '0'); 
     
      }
  }
  loadtick();
} , []);

 async function on() {
  setTickOne(0);
await AsyncStorage.setItem('tickOne', '0'); 

}



//Function to take the user home when it is called.
function navigate() {
    navigation.navigate('Home');
}

function link() {
  Linking.openURL('https://www.gov.uk/government/publications/what-to-do-with-a-passport-when-the-passport-holder-has-died');
  
}


return (


    <View style={styles.container}>
    
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>  Life Insurance</Text>
    </View>
    <TouchableOpacity onPress={link} style={styles.link}>
    <Text style={styles.txtb}> Link </Text>
    </TouchableOpacity>
    <View style={styles.list}>
    <Image style={styles.icon3}   source={require('../assets/images/VideoPlaceholder.png')}/>
    
<ScrollView style={styles.svs}>
    <Text style={styles.txtp}> 1.When visiting the government website linked above.  You are met with this webpage
 [*Show webpage*].
       </Text>
 <Text style={styles.txtp}>
2. Next, click ‘What to do with a passport when the passport holder has died’ under the ‘Documents’ section a file will download to your computer.
 </Text>
 <Text style={styles.txtp}>
 3. From here simply click the icon for the downloaded file and it will open. It is worth noting that it is good practice to be careful of most websites that download files to your computer but in the case of the government website we have linked there is nothing to worry about! (There is also the option on the site to request a version or format of the document that is more accessible to any needs that you may have.)
 </Text>
 <Text style={styles.txtp}>
4.The document itself is only three pages long. Seeing as it needs to be posted to the address included at the bottom of the final page. 
 </Text>
 <Text style={styles.txtp}>
5. You must now print the document.The option for printing is often found under the ‘file’ tab such as in Microsoft Word [*Show this*]. When the document is printed, you can fill it out physically but if you need to fill it out on the computer this is also possible, however to post it you will still need to print it off. (If you do not have access to a printer, consider contacting the Citizens Advice Bureau.)
 </Text>
 <Text style={styles.txtp}>
5.5. In order to digitally edit documents you have downloaded, some programs such as Microsoft Word require you to ‘enable editing’ by clicking this button at the top of the screen. Upon clicking it, you are now able to type words into the page in order to fill in the details of the passport, yourself and the deceased. You can also alter how the document looks which could be useful as you can change the color of the background and text.
 </Text>
 <Text style={styles.txtp}>
6.From here simply fill out the form digitally or physically before sending it off to the address enclosed in the document and the Passport Office should handle the rest.
 </Text>
 </ScrollView>
      <View style={styles.items}>
   
      </View>
    </View>


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

      <TouchableOpacity onPress={navigate} style={styles.CircleShapeView}>
      <Image style={styles.icon2}   source={require('../assets/images/HomeIc.png')}/>
     </TouchableOpacity>
     <TouchableOpacity onPress={on} style={styles.Button}>
<Text style={styles.txtb}> Done </Text>
     </TouchableOpacity>
    </KeyboardAvoidingView>
  
  </View>
);
}




const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#c9bea7',




},
tasksWrapper: {
paddingTop: 80,
paddingHorizontal: 20,


},
sectionTitle: {
  color:'#6b564e',
  fontSize:36,
  fontWeight:'',
  marginLeft:'19%',


},
items: {
marginTop: 30,
},
writeTaskWrapper: {
position: 'absolute',
bottom: 60,
width: '100%',
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
},
input :{
paddingVertical: 15,
paddingHorizontal: 15,
backgroundColor: 'white',
borderRadius: 60,
borderColor: 'blue',
width: 250,
},
addWrapper: {
width: 60,
height: 60,
backgroundColor:'white',
borderRadius: 60,
justifyContent: 'center',
alignItems: 'center',
},
addText: {


},
list: {

  top:40,
  width:'90%',
  height:'60%',
  backgroundColor:'white',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  left:'5%'
},
CircleShapeView: {
    width: 80,
    height: 80,
    borderRadius: 180/2,
    backgroundColor: '#dfd2bf',

   
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
   }, 
   icon2: {
   alignSelf:'center',
   top:'18%',
     width: 50,
     height: 50,
   
   },
   icon3: {
    alignSelf:'center',
    top:'5%',
      width: 330,
      height: 200,
    
    },
    txtp:{
      color:'#6b564e',

      fontSize: '15',
      fontWeight:'bold',
      alignSelf:'center',
      top:60,
      marginTop: 20,
      marginLeft:30,
      marginRight:30,
    }, 
    txtb:{
      color:'#6b564e',

      fontSize: '15',
      fontWeight:'bold',
      alignSelf:'center',
  
      marginLeft:30,
      marginRight:30,
    }, 
    Button:{
      width:'50%',
      color:'#000',
      height:52,
      backgroundColor:'#dfd2bf',
  
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      left: '5%',
      shadowColor: 'rgba(0, 0, 0, 0.9)',
      shadowOpacity: 1,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
     },
     svs:{
       top:'5%',
     },
     link:{
      width:'50%',
      color:'#000',
      height:52,
      backgroundColor:'#dfd2bf',
  
    top:'3%',
      justifyContent:'center',
  
      left: '25%',
      shadowColor: 'rgba(0, 0, 0, 0.9)',
      shadowOpacity: 1,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
     }
});






export default Life