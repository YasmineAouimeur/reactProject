//APP.js

import React from 'react'
import Search from './components/Search'
import Barre from './components/Barre'
import Corps from './components/Corps'
import { StyleSheet, View } from 'react-native'

export default class App extends React.Component {  
  render() {
    return (
      <View style={styles.Maincontainer}> 
        <View style={{height:80,}}>
          <Barre/>
        </View>
        <View style={styles.container}>
          <Corps/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
