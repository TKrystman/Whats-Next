import React from 'react';
import {Text ,View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import { Overlay } from '@rneui/base';

const Complete =(props)=>{
    /*
This will run once a section is completed and the user presses the "done" button 
*/
    return(
        props.successMessage?
            <Overlay overlayStyle={styles.Overlay} isVisivle={true} onBackdropPress={()=>props.close('')}>
                 <Image style={styles.errorIcon}    
                   source={require("../assets/images/tick.png")}/>
            <Text style={styles.errMSG}>
                {props.successMessage}
            </Text>
            
            </Overlay>
            :
            <Overlay overlayStyle={styles.Overlay} isVisivle={true}>
            <ActivityIndicator size={'large'} color={'blue'}/>
            </Overlay>
        
    )
}

export default Complete ;

const styles = StyleSheet.create({
    Overlay:{
        width:'80%',
        height:320,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#D9A24B',
    },
    errorIcon:{
        width:152,
        height:152,
    },
    errMSG: {
        fontWeight:'500',
        fontSize:30,
        color: '#ffffff',
        marginTop:20,
      },

      btntxt:{
        fontWeight:'bold',
        fontSize:30,
        color:'#ffffff',
      }
})