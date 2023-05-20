import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"

const Home = ({ navigation }) => {
  const [tickOne, setTickOne] = useState(false)
  const [tickTwo, setTickTwo] = useState(false)
  const [tickThree, setTickThree] = useState(false)
  const [tickFour, setTickFour] = useState(false)
  const isFocused = useIsFocused()



  
  async function LoadtickOne() {
    const TotalValue = await AsyncStorage.getItem("tickOne")
    console.log("home = " + TotalValue)
    console.log(TotalValue)
    if (TotalValue !== null) {
      setTickOne(TotalValue)
    }
  }
  useEffect(() => {
    LoadtickOne()
  }, [isFocused])


  async function LoadtickTwo() {
    const TotalValue = await AsyncStorage.getItem("tickTwo")
    console.log("home = " + TotalValue)
    console.log(TotalValue)
    if (TotalValue !== null) {
      setTickTwo(TotalValue)
    }
  }
  useEffect(() => {
    LoadtickTwo()
  }, [isFocused])

  async function LoadtickThree() {
    const TotalValue = await AsyncStorage.getItem("tickThree")
    console.log("home = " + TotalValue)
    console.log(TotalValue)
    if (TotalValue !== null) {
      setTickThree(TotalValue)
    }
  }
  useEffect(() => {
    LoadtickThree()
  }, [isFocused])

  async function LoadtickFour() {
    const TotalValue = await AsyncStorage.getItem("tickFour")
    console.log("home = " + TotalValue)
    console.log(TotalValue)
    if (TotalValue !== null) {
      setTickFour(TotalValue)
    }
  }
  useEffect(() => {
    LoadtickFour()
  }, [isFocused])

  const on = async () => {
    await AsyncStorage.removeItem("tickOne")
    setTickOne(false)
    await AsyncStorage.removeItem("tickTwo")
    setTickTwo(false)
    await AsyncStorage.removeItem("tickThree")
    setTickThree(false)
    await AsyncStorage.removeItem("tickFour")
    setTickFour(false)
  }

  const RankIcon = () => {
    if (tickOne == 'true') {
      console.log("Tick one")
      return (
        <Image
          style={styles.icon2}
          source={require("../assets/images/tick.png")}
        />
      )
    } else {
      return <Image style={styles.icon2} source={null} />
    }
  }

  const RankIcon2 = () => {
    if (tickTwo == 'true') {
      console.log("Tick Two")
      return (
        <Image
          style={styles.icon2}
          source={require("../assets/images/tick.png")}
        />
      )
    } else {
      return <Image style={styles.icon2} source={null} />
    }
  }
  const RankIcon3 = () => {
    if (tickThree == 'true') {
      console.log("Tick Three")
      return (
        <Image
          style={styles.icon2}
          source={require("../assets/images/tick.png")}
        />
      )
    } else {
      return <Image style={styles.icon2} source={null} />
    }
  }

  const RankIcon4 = () => {
    if (tickFour == 'true') {
      console.log("Tick Four")
      return (
        <Image
          style={styles.icon2}
          source={require("../assets/images/tick.png")}
        />
      )
    } else {
      return <Image style={styles.icon2} source={null} />
    }
  }



  //Functions to allow the buttons to navigate to the different parts of the app.
  function navigate() {
    navigation.navigate("Passport")
  }
  function navigate2() {
    navigation.navigate("Car")
  }
  function navigate3() {
    navigation.navigate("Life")
  }
  function navigate4() {
    navigation.navigate("Water")
  }

  function navigate5() {
    navigation.navigate("Cal")
  }

  function navigate6() {
    navigation.navigate("Add")
  }

  /**
Pretty simple return code that lays out the home screen with touchable opecetys that can be used to navigate to all parts of the app.
*/

  return (
    <View style={styles.mainView}>
      <Image style={styles.ImageStyle} source={require('../assets/appTop.png')}/>
      <View style={styles.BotView}>
      
        <View style={styles.list}>
          <View style={styles.Ticker}>
            <RankIcon />
          </View>
          <TouchableOpacity onPress={navigate} style={styles.Button}>
            <Text style={styles.BtnTxt}>Passport</Text>
          </TouchableOpacity>

      
          <View style={styles.Ticker}>
          <RankIcon2/>
          </View>
          <TouchableOpacity onPress={navigate2} style={styles.Button}>
            <Text style={styles.BtnTxt}>Car Insurance</Text>
          </TouchableOpacity>

        
          <View style={styles.Ticker}>
          <RankIcon3/>
          </View>
          <TouchableOpacity onPress={navigate3} style={styles.Button}>
            <Text style={styles.BtnTxt}>Life Insurance</Text>
          </TouchableOpacity>
          <View>

          
            <View style={styles.Ticker}>
            <RankIcon4/>
           
            </View>
            <TouchableOpacity onPress={navigate4} style={styles.Button}>
              <Text style={styles.BtnTxt}>Water</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <TouchableOpacity onPress={navigate6} style={styles.ButtonLower}>
          <Text style={styles.plstxt}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={navigate5} style={styles.ButtonLower2}>
          <Image
            style={styles.icon3}
            source={require("../assets/images/call.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

//Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5ECD7",
    height: "100%",
  },
  BotView: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ImageStyle: {
    width: "50%",
    resizeMode: "contain",
  },
  Header: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: "20%",
    marginTop: 10,
  },
  TextInput: {
    width: "90%",
    left: "5%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 52,
    borderRadius: 5,
    marginTop: 20,
    color: "#fff",
  },
  FormView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
  },
  Button: {
    width: "70%",
    color: "#000",
    height: 52,
    backgroundColor: "#6E362A",

    marginTop: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "20%",
  },
  BtnTxt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F5ECD7",
  },
  SignupTxt: {
    color: "gray",
  },
  Icon: {
    marginLeft: 330,
    marginTop: -200,
  },

  icon2: {
    alignSelf: "center",
    top: "2%",
    width: 35,
    height: 35,
  },
  Ticker: {
    top: 72,
    color: "#000",
    height: 52,
    borderColor: "#6E362A",
    borderWidth: 5, borderRadius: 4,
    width: 50,
    left: "5%",
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  sectionTitle: {
    color: "#6E362A",
    fontSize: 36,
    fontWeight: "500",
    marginLeft: "23%",
  },
  list: {
bottom: 30,
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    left: "5%",
  },
  ButtonLower: {
    width: 80,
    height: 80,
    borderRadius: 180 / 2,
    backgroundColor: "#D9A24B",
    left: "10%",
    top: "75%",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 1,
    elevation: 4,
    position: "absolute",
    shadowRadius: 12,
    shadowOffset: { width: 1, height: 10 },
  },
  ButtonLower2: {
    width: 80,
    height: 80,
    borderRadius: 180 / 2,
    backgroundColor: "#D9A24B",
    left: "70%",
    top: "75%",
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 12,
    shadowOffset: { width: 1, height: 10 },
  },
  plstxt: {
    fontSize: 84,
    fontWeight: "200",
    left: "19%",
    bottom: "19%",
    color: "white",
  },
  icon3: {
    alignSelf: "center",
    top: "9%",
    width: 70,
    height: 70,
  },
  ImageStyle:{
    width:'130%',
    height:'30%',
    resizeMode:'contain',
 },
})

export default Home