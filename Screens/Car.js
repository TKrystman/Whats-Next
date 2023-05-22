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





const Car = ({ navigation }) => {
  //Variables that can be used throughout the code.
  const [Points, setPoints] = useState(0)
  const [tickTwo, setTickTwo] = useState(false)
  const video = React.useRef(null)
  const [successMessage,setSuccessMessage]= useState('');
const [Loading,setLoading]= useState(false);

useEffect(() => {
  (async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      console.log('Here are all your calendars:');
      console.log({ calendars });
    }
  })();
}, []);

async function createCalendar() {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    console.log('Calendars:', calendars);

    const defaultCalendar = calendars.find(calendar => (
      calendar.allowsModifications &&
      calendar.source.name === 'iCloud' &&
      calendar.title === 'Home'
    ));
    console.log('Default calendar:', defaultCalendar);

  if (defaultCalendar) {

    const eventDetails = {
      title: 'My Event',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 1 week from now, plus 2 hours
      timeZone: 'Europe/London',
      location: 'Bath Spa University',
      notes: 'This is a test event',
      alarms: [{ relativeOffset: -60 }] // 1 hour before event
    };
    await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
  }
  }
}


  async function loadtick() {
    const tick = await AsyncStorage.getItem("tickTwo")
    if (tick !== null) {
      setTickTwo(tick)
    }
  }

  useEffect(() => {
    loadtick()
  }, [])

  async function on() {
    setTickTwo("true")
    await AsyncStorage.setItem("tickTwo", "true")

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
      "https://www.theaa.com/help-support/report-a-bereavement"
    )
  }
  async function off() {
    setTickTwo("false")
    await AsyncStorage.setItem("tickTwo", "false")

    setLoading(false);
  
      
      setLoading(false);
      console.log(re);
        
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Car Insurence</Text>
      </View>
      <TouchableOpacity onPress={link} style={styles.link}>
        <Text style={styles.linkt}> Link </Text>
      </TouchableOpacity>
      <View style={styles.list}>
      <Image style={styles.icon3} source={require('../assets/images/VideoPlaceholder.png')}/>

        <ScrollView style={styles.svs}>
          <Text style={styles.txtp}>
            {" "}
            1.When visiting the website listed above the following web page will show:
          </Text>
          <Image style={styles.ImageStyle} source={require('../assets/Screenshot1.png')}/>
          <Text style={styles.txtp}>
            2. They will need to take your contact details so we can get in touch with you about closing their account.
             They may also ask to see certain documents, such as a death certificate. You'll need to have these things to hand: Your email address, 
             the deceased person's address, membership or policy number, and date of death. (Membership numbers have 16 digits, and can be found on the back of their membership card.
              Policy numbers can be found on their policy documents.)
          </Text>
          <Text style={styles.txtp}>
            3. Fill out the form provided on the website. Once you  are done hit send the Your request will then be sent to the AA Personal Support Team.
          </Text>
          <Image style={styles.ImageStyle} source={require('../assets/Screenshot2.png')}/>
          <Text style={styles.txtp}>
            4.They will update our records and get in touch within 5 working days to confirm. Sometimes, 
            you might need to send documents to help verify your identity. If this is the case,They will let you know by email.
             Please Note If the deceased member was disabled note that once the insurance is changed over you will not receive the same tax benefits and will have to start paying road tax immediately.
          </Text>
          <TouchableOpacity style={styles.Button2}  onPress={createCalendar}>
        <Text style={styles.BtnTxt2}>Remind me in 1 week.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button3}  onPress={off}>
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
  },
  Button2:{
    width: "70%",
      color: "#000",
      height: 52,
      borderColor: "#6E362A",
      borderWidth: 5, borderRadius: 4,
      marginTop: 70,
  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   
      

  },

  BtnTxt2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#6E362A",
  },
  Button3:{
    width: "40%",
      color: "#000",
      height: 52,
      borderColor: "#6E362A",
      borderWidth: 5, borderRadius: 4,
      marginTop: 40,
  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   
      

  },

})






export default Car