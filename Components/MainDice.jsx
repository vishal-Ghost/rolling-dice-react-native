import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import diceOne from '../assets/dice-152173_1280.png'
import diceTwo from '../assets/dice-152174_1280.png'
import diceThree from '../assets/dice-152175_1280.png'
import diceFour from '../assets/dice-152176_1280.png'
import diceFive from '../assets/dice-152177_1280.png'
import diceSix from '../assets/dice-152178_1280.png'
import Dice from './Dice'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


const imgArray = [diceOne,diceTwo,diceThree,diceFour,diceFive,diceSix]



const MainDice = () => {

    const[num,setNum] = useState(0)

    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      };

    function handleDice(){
        ReactNativeHapticFeedback.trigger("effectDoubleClick", options);
        const randNum = Math.floor(Math.random() * 6) 
        setNum(randNum)
       }
  return (
    <>
    <View style={styles.container}>
        <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2018/03/09/14/41/model-3211627_1280.jpg'}}  style={styles.image}>
    <Dice imgPath={imgArray[num]} />
    <TouchableOpacity 
    onPress={handleDice}
    style={styles.diceBtn}><Text style={styles.diceBtnTxt}>Roll Dice</Text></TouchableOpacity>
    </ImageBackground>
    </View>
    </>
  )
}

export default MainDice

const styles = StyleSheet.create({
    diceBtn :{
        width:200,
        height:50,
        backgroundColor:'#F5F5F5',
        borderRadius:5,
        alignItems:'center'
    },
    diceBtnTxt:{
        color:'#218F76',
        fontSize:40,
        fontWeight:'bold',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        
    },
    image:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap:10,

    }
})