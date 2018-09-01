import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Linking, } from 'react-native'



class Bas extends React.Component {
  render() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.socialMedia}>
                <TouchableOpacity style={styles.button} onPress={ ()=> Linking.openURL('https://facebook.com')}>
                    <Image style={styles.image} source={require("../images/facebook.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> Linking.openURL('https://linkedin.com')}>
                    <Image style={styles.image} source={require("../images/in.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> Linking.openURL('https://youtube.com')}>
                    <Image style={styles.image} source={require("../images/youtube.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.langue}>
                <TouchableOpacity style={styles.button} onPress={ ()=> Linking.openURL('')}>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image style={{width:20,height:20,justifyContent: 'center', alignItems: 'center',}} source={require("../images/world.png")}/>
                    <Text style={{flex: 1,fontSize:14, borderBottomWidth:1, borderColor: '#535376', color: '#535376' }}> Fançais </Text>
                    <Image style={{width:15,height:15,justifyContent: 'center', alignItems: 'center',}} source={require("../images/click.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      flexDirection: 'row',
      backgroundColor: '#F1F1F1',
      borderColor: 'gray',
      borderTopWidth: 1,
      height: 45,
      width: '100%',
      padding: 5,
    },
    socialMedia: {
      flex: 1,
      flexDirection: 'row',
    },

    button: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        margin: 0,
      },
    langue: {
      flex:2,
      flexDirection: 'row',
      alignItems: 'flex-end',
      margin: 0,
    },

    image: {
      width: 35,
      height: 35,
    },
  });

  export default Bas