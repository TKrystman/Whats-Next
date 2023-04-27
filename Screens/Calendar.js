import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
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
        title: 'My Event',
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 1 week from now, plus 2 hours
        timeZone: 'America/Los_Angeles',
        location: 'Bath Spa University',
        notes: 'This is a test event',
        alarms: [{ relativeOffset: -60 }] // 1 hour before event
      };
      await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
    }
  }
};
  return (
    <View style={styles.container}>
      <Text  >Calendar Module Example</Text>
      <Button  title="Create a new Event" onPress={createCalendar} />

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
    backgroundColor: '#c9bea7',
    
    color:'#000',
    height:52,
    backgroundColor:'#dfd2bf',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    
    },


  }); 

  export default Cal