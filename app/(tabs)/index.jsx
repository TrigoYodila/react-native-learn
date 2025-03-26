import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable } from 'react-native'
import React from 'react'
import testImage from '@/assets/images/test.jpg'

const userPhoto = 'https://img.freepik.com/photos-gratuite/femme-affaires-africaine-confiante-souriante-portrait-gros-plan-pour-emploi-campagne-carriere_53876-143280.jpg?t=st=1742994535~exp=1742998135~hmac=015e9a5151259f18bff8f3991c799068fe6f48a1c9b03345a5097a3ffd8d617b&w=1380'

const app = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
          {/* <ImageBackground
          source={testImage}
          resizeMode='cover'
          style={styles.image}
        >
          <Text style={styles.text}>Trigo Yod's</Text>
          <Text style={styles.smallText}>Daniels young</Text>
          <Image source={{uri:userPhoto}} 
            style={{width:200, height:200, resizeMode:'cover'}}
          />
        </ImageBackground> */}
        <Pressable onPress={()=>console.log("Presseding ! ")}>
          <Image source={{uri:userPhoto}} 
              style={{width:200, height:200, resizeMode:'cover'}}
          />
        </Pressable>
        <Button 
          title='Submit' 
          onPress={()=>console.log("tetstst")}
          color={'midnightblue'}
          disabled
        />
      </ScrollView>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingVertical:40,
    paddingHorizontal:10
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center'
  },
  smallText:{
    fontSize:20,
    color:'white',
    fontWeight:'600',
    textAlign:'center'
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  }
})