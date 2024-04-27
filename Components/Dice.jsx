import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dice = ({imgPath}) => {

  return (
    <>
    <Image source={imgPath} style={styles.imgDice}/>
    </>
  )
}

export default Dice

const styles = StyleSheet.create({

  imgDice :{
    height:200,
    width:200
  }
})