import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import testImage from '@/assets/images/test.jpg'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={testImage}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Trigo Yod's</Text>
        <Text style={styles.smallText}>Daniels young</Text>
      </ImageBackground>
    </View>
  )
}

export default app


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
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