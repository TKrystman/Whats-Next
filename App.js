import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Passport from './Screens/Passport';
import Car from './Screens/Car';
import Life from './Screens/Life';
import Water from './Screens/Water';
import Cal from './Screens/Calendar';
export default function App() {
 
  const Stack = createNativeStackNavigator();
  
 /*
 Return contains the stack which has all the accessible js files/ screens for the app.
 Using the react native stack dependancy I was able to do this and build out my app from here.
 */
  return(
  <NavigationContainer>
  <Stack.Navigator>

  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
  <Stack.Screen name="Passport" component={Passport} options={{headerShown:false}}/>
  <Stack.Screen name="Car" component={Car} options={{headerShown:false}}/>
  <Stack.Screen name="Life" component={Life} options={{headerShown:false}}/>
  <Stack.Screen name="Water" component={Water} options={{headerShown:false}}/>
  <Stack.Screen name="Cal" component={Cal} options={{headerShown:false}}/>

 
  </Stack.Navigator>
</NavigationContainer>
  );
}
   







