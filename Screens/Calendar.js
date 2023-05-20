import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';

const  Cal = ({ navigation }) => {
  
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
        title: 'AA Records',
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 1 week from now, plus 2 hours
        timeZone: 'Europe/London',
        location: 'Bath Spa University',
        notes: 'Check AA Records have been updated.',
        alarms: [{ relativeOffset: -60 }] // 1 hour before event
      };
      await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
    }
  }
};
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.Button}  onPress={createCalendar}>
        <Text style={styles.BtnTxt}>Remind me in 1 week.</Text>
        </TouchableOpacity>

    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECD7",
    
    color:'#000',
    height:52,


    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    
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


  }); 

  export default Cal