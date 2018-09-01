// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, TouchableOpacity, FlatList, Image } from 'react-native'

class Barre extends React.Component {
  render() {
    return (
     
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image  style={styles.menu} source={require("../images/menu.png")}/>
          </TouchableOpacity>
          <Image style={styles.image} source={require('../images/logo-bleu.png')}/> 
        </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  button: {
    flex:1,
    marginRight: 0,
  },

  image: {
    flex: 6,
    padding: 10,
    width: '100%',
    height: 40,
  },
  menu: {
    width: 30,
    height: 30,
    padding: 10,
    marginLeft: 5,
  },
  
});

export default Barre