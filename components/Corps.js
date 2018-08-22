// Components/Corps.js

import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';


class Corps extends React.Component {

    state = {
        mute: false,
        shouldPlay: true,
      }
        
      handlePlayAndPause = () => {  
        this.setState((prevState) => ({
           shouldPlay: !prevState.shouldPlay  
        }));
      }
      
      handleVolume = () => {
        this.setState(prevState => ({
          mute: !prevState.mute,  
        }));
      }

  render() {
    return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
        
      <View style={styles.container}>
        <Image style={styles.image} source={require('../src/img/Cours1.png')}/>
        <View style={styles.coursContainer}>
            <View style={styles.videoContainer}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    shouldPlay
                    resizeMode="cover"
                    style={{ width: 100, height: 100 }}
                />
                <View style={styles.controlBar}>
                    <MaterialIcons 
                        name={this.state.mute ? "volume-mute" : "volume-up"}
                        size={20} 
                        color="white" 
                        onPress={this.handleVolume} 
                    />
                    <MaterialIcons 
                        name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                        size={20} 
                        color="white" 
                        onPress={this.handlePlayAndPause} 
                    />
                </View>
            </View>
            <View style={styles.textCoursContainer}>
                <Text style={styles.basetext}>
                    <Text style={styles.title}>Devenir un leader{'\n'}{'\n'}</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing ...</Text>
                    <Text style={styles.url}
                    onPress={() => Linking.openURL('#')}>
                    lire la suite
                    </Text>
                </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <Button style={styles.primaryButton} title='Commencer la formation' onPress={() => {}}/>
            <TouchableOpacity style={styles.secondaryButton} title='Battle' onPress={()=>{alert("you clicked me")}}>
                <View style = {{ alignItems: 'center', justifyContent: 'center',width:320, 
        height:50,}}>
                    <Text style = {{color: '#3A9BFF',fontSize: 16,fontWeight: 'bold',}}> Battle </Text> 
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.sommaireContainer}>
            <View style={styles.sommaireTitle}>
            <Text style={styles.basetext}>
                    <Text style={styles.title}>Devenir un leader{'\n'}</Text>
                </Text> 
            </View>
            <View style={styles.sommaireContent}>
                <Text>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.consectetur adipiscing ...</Text>
            </View>
        </View>
      </View>
    </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
      flex: 1,
      padding: 20,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    coursContainer:{
      flexDirection: 'row',
    },
    textCoursContainer:{
      flex:2,
      marginLeft:10,
      marginRight:10,
    },
    url: {
      fontSize: 11,
      color: '#3A9BFF',
    },
    image: {
      marginBottom: 30,
    },
    basetext: {
      fontSize: 11,
      color: '#535376',
    },
    title: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      paddingLeft: 5,
      color: '#535376',
      fontSize: 16,
      fontWeight: 'bold',
    },
    videoContainer:{
        flex: 1,
        marginBottom: 20,
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    buttonContainer:{
        flex:1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
    },
    primaryButton: { 
        margin:10,
        fontSize: 13,
        fontWeight: 'normal',  
      },
    secondaryButton: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingBottom: 10, 
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6, 
        borderColor: '#3A9BFF',
        borderWidth: 1,
        marginTop: 10,
        height:50,
    },
    sommaireContainer:{
        flex:1,
        flexDirection: 'column',
        borderColor: '#3A9BFF',
        borderWidth: 1,
    },
    sommaireTitle: {
        flex:1,
        backgroundColor: '#f2f2f2',
        borderColor: '#3A9BFF',
        borderWidth: 1, 
    },
    sommaireContent: {
        flex:4,

    },
  });

export default Corps