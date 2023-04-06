import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';







const Home = ({navigation})=>{

 
  const [tickOne, setTickOne] = useState('0');
  





    
  

  useEffect(() => {
  
    async function LoadtickOne() {
        const TotalValue = await AsyncStorage.getItem('tickOne'); 
        if (TotalValue !== null) {
          setTickOne(TotalValue);
        }
    }
    LoadtickOne();
}, []);

const on = async() => { 
  await AsyncStorage.removeItem('tickOne');
  
  setTickOne('0');
}

 


  

  const RankIcon = () => {
  
    if (tickOne !== '0') {
      return <Image style={styles.icon2} source={require('../assets/images/tick.png')}/> 
      } else {
        return null;
      }
      
      
    
    }

  

//Functions to allow the buttons to navigate to the different parts of the app.
function navigate(){
  navigation.navigate('Passport');
}
function navigate2() {
  navigation.navigate('Car');
}
function navigate3(){
  navigation.navigate('Life');
}
function navigate4(){
navigation.navigate('Water');
}

function navigate5(){
  navigation.navigate('Cal');
  }


/**
Pretty simple return code that lays out the home screen with touchable opecetys that can be used to navigate to all parts of the app.
*/


return(
<View style={styles.mainView}>


<View style={styles.BotView}>
<Text style={styles.sectionTitle}>TO COMPLETE</Text>
<View style={styles.list}>
<View style={styles.Ticker}>
<RankIcon/>
</View>
<TouchableOpacity onPress={navigate}  style={styles.Button}>
<Text style={styles.BtnTxt}>
Passport
</Text>
</TouchableOpacity>



<View style={styles.Ticker}></View>
<TouchableOpacity onPress={navigate2} style={styles.Button}>
<Text style={styles.BtnTxt}>
Car Insurance
</Text>
</TouchableOpacity>



<View style={styles.Ticker}></View>
<TouchableOpacity onPress={navigate3} style={styles.Button}>
<Text style={styles.BtnTxt}>
Life Insurance
</Text>
</TouchableOpacity>


<View >
<View style={styles.Ticker}></View>
<TouchableOpacity onPress={navigate4} style={styles.Button}>
<Text style={styles.BtnTxt}>
Water
</Text>
</TouchableOpacity>
</View>
</View>

<TouchableOpacity onPress={on} style={styles.ButtonLower}>
  <Text style={styles.plstxt}>+</Text>
</TouchableOpacity>
<TouchableOpacity onPress={navigate5} style={styles.ButtonLower2}>
<Image style={styles.icon3} source={require('../assets/images/call.png')}/> 
</TouchableOpacity>

</View>
</View>
);
} 


//Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({
mainView: {
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#c9bea7',
height:'100%',
   },
BotView:{
width:'100%',
height:'80%',
borderTopLeftRadius:30,
borderTopRightRadius:30,
   },
ImageStyle:{
width:'50%',
resizeMode:'contain'
},
Header:{
color:'#fff',
fontSize:36,
fontWeight:'bold',
marginLeft:'20%',
marginTop:10
},
TextInput:{
width:'90%',
left: '5%',
borderWidth:1,
borderColor:'#fff',
height:52,
borderRadius:5,
marginTop:20,
color:'#fff'
},
FormView:{
width:'100%',
display:'flex',
flexDirection:'column',
justifyContent:'center',
marginTop:40
},
Button:{
 width:'70%',
 color:'#000',
 height:52,
 backgroundColor:'#AB946F',

 marginTop:20,

 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 left: '20%',
 
},
BtnTxt:{
 fontWeight:'bold',
 fontSize:20,
 color:'#ffffff',

},
SignupTxt:{
 color:'gray',
},
Icon:{
 marginLeft:330,
 marginTop:-200,
},


icon2: {
alignSelf:'center',
top:'5%',
  width: 45,
  height: 45,

},
Ticker:{
  top: 72,
  color:'#000',
  height:52,
  backgroundColor:'#AB946F',
  width: 50,
  left: '5%',
  height: 50,
  borderRadius: 5,
  marginRight: 15,
 
 }, 
 sectionTitle: {
  color:'#6b564e',
  fontSize:36,
  fontWeight:'',
 marginLeft:'23%', 


}, 
list: {

  top:40,
  width:'90%',
  height:'80%',
  backgroundColor:'white',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  left:'5%'
},
ButtonLower:{
  width: 80,
  height: 80,
  borderRadius: 180/2,
  backgroundColor: '#dfd2bf',
  left: '10%',
 top: '95%',
  shadowColor: 'rgba(0, 0, 0, 0.9)',
  shadowOpacity: 1,
  elevation: 6,
  position: 'absolute',
  shadowRadius: 15 ,
  shadowOffset : { width: 1, height: 13},
},
ButtonLower2:{
  width: 80,
  height: 80,
  borderRadius: 180/2,
  backgroundColor: '#dfd2bf',
left: '70%',
top: '95%',
 position: 'absolute',
  shadowColor: 'rgba(0, 0, 0, 0.9)',
  shadowOpacity: 1,
  elevation: 6,
  shadowRadius: 15 ,
  shadowOffset : { width: 1, height: 13},
},
plstxt:{
fontSize:64,
fontWeight:"bold",
left: '25%',
bottom:'3%',
color:'#6b564e',
},
icon3:{
  alignSelf:'center',
top:'9%',
  width: 70,
  height: 70,
}
   });




export default Home