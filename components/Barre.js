// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, TouchableOpacity, FlatList, Image } from 'react-native'

class Barre extends React.Component {
  render() {
    return (
     
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image source={require("../src/img/menu.png")}/>
          </TouchableOpacity>
          <Image style={styles.image} source={require('../src/img/logo-bleu.png')}/> 
        </View>
   
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 10,
  },
  button: {
    flex:1,
    marginRight: 0,
    width: 50,
    height: 50,
  },
  image: {
    marginTop: 10,
    flex: 6,
    marginLeft: 0,
    marginRight: 10,
    width: 320,
    height: 40,
  },
});

export default Barre