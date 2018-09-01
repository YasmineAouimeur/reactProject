
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Text, View,AppRegistry, ScrollView, Image, TextInput, Button, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { DrawerNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import NavigationActions from 'react-navigation';
import { Card } from "react-native-elements";
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import cours from './data/cours'
import catalogue from './data/catalogue'
import question from './data/question'
import chapitres from './data/chapitres'
import Bas from './components/Bas'
import Barre from './components/Barre'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Data catalogue ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Data catalogue ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Login Screen ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class HomeScreen extends React.Component {
  constructor(props) {
   super(props);
   this.state1 = { text: 'Utilisateur' };
   this.state2 = { text: 'Mot de passe' };
 }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.box}/>
          <Image
          style={styles.logo}
          source={require('./images/logo-blanc.png')}
          />
          <View style={styles.box}/>
        </View>
        <View style={styles.containerbottom}>
          <View style={styles.box}/>
          <View style={styles.box}>
            <View style={styles.boxText}>
            <TextInput
            style={{marginTop: 5,height:30, textAlign: 'center', color: '#656589' }}
            onChangeText={(text) => this.setState({text})}
            value={this.state1.text}
            />
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxText}>
            <TextInput
            style={{marginTop: 5,height:30, textAlign: 'center', color: '#656589' }}
            onChangeText={(text) => this.setState({text})}
            value={this.state2.text}
            />
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxButton}>
              <Button
            title="Commencer"
            onPress={() => this.props.navigation.navigate('Dashboard')}
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text style={{textAlign: 'center', color: '#656589', textDecorationLine: 'underline'}}>Mot de passe oublié? </Text>
            </View>
        </View>
      </View>

    );
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Dashboard ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  
  static navigationOptions = {
    title: 'Home',
    navigationOptions: ({ navigation }) => ({
      headerLeft : <Button onPress={() => this.props.navigate('DrawerOpen')} navigate={navigation.navigate} />,
    }),
  };

  render() {
    
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        
        <View style={styles.frontbox}>
        <ImageBackground style={styles.front} source={require('./images/front.jpg')}>
          <View style={styles.homeMessageBox}>
            <Text style = {styles.homeMessage}> Bonjour ! </Text> 
            <TouchableOpacity style={styles.homeButton} title='Continuez' onPress={() => this.props.navigation.navigate('Question')}>
                  <View>
                      <Text style = {{color: '#FFF',fontWeight: 'normal',}}> Continuez votre formation </Text> 
                  </View>
              </TouchableOpacity>
          </View>
        </ImageBackground>
        </View>


        <View style={styles.boxgrey}>
          <Text style={styles.dashTitle}> Mes cours </Text>
          <FlatList horizontal data={catalogue} renderItem={({ item: rowData }) => {
              return (
                <Card
                  title={null}
                  image={{ uri: rowData.imageUrl }}
                  containerStyle={styles.cardStyle}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Cours')}>   
                        <Text style={styles.link}> {rowData.title}</Text>
                    </TouchableHighlight>
                  </TouchableOpacity>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index.toString()}/>
        </View>

        <View style={styles.boxgrey}>
          <Text style={styles.dashTitle}> Catalogue des cours </Text>
          <FlatList horizontal data={catalogue} renderItem={({ item: rowData }) => {
              return (
                <Card
                  title={null}
                  image={{ uri: rowData.imageUrl }}
                  containerStyle={styles.cardStyle}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Cours')}>   
                        <Text style={styles.link}> {rowData.title}</Text>
                    </TouchableHighlight>
                  </TouchableOpacity>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index.toString()}/>
        </View>


        <View style={styles.boxblue}>
        <Text style={{marginTop: 5, textAlign: 'center', color: '#fff',}}> Mes points </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>

            <View style={styles.boxblue}>
              <Image style={{marginTop: 20, width: 30, height: 30}} source={require('./images/points.png')}/>
              <Text style={{fontSize: 20, marginTop: 5, textAlign: 'center', color: '#535376'}}> 658 </Text>
              <Text style={{fontSize: 9, marginTop: 5, textAlign: 'center', color: '#fff'}}> Points personnels </Text>
            </View>

            <View style={styles.boxblue}>
              <Image style={{marginTop: 20, width: 30, height: 30}} source={require('./images/classement.png')} />
              <Text style={{fontSize: 20, marginTop: 5, textAlign: 'center', color: '#535376'}}> 12 </Text>
              <Text style={{fontSize: 9, marginTop: 5, textAlign: 'center', color: '#fff'}}>Classement</Text>
            </View>

            <View style={styles.boxblue}>
              <Image style={{marginTop: 20, width: 50, height: 30}} source={require('./images/entreprise.png')}/>
              <Text style={{fontSize: 20, marginTop: 5, textAlign: 'center', color: '#535376'}}> 17 659 </Text>
              <Text style={{fontSize: 9, marginTop: 5, textAlign: 'center', color: '#fff'}}> Total Entreprise </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.container}>
          <Bas/>
        </View>
        </View>
        </ScrollView>

    );
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  Cours ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class CoursScreen extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: data
        };
      }
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
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('./images/Cours1.png')}/>
          <View style={styles.coursContainer}>
              <View style={styles.videoContainer}>
                  <Video
                      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                      shouldPlay
                      resizeMode="cover"
                      style={{ width: 110, height: 100 }}
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
                  <View style = {{ alignItems: 'center', justifyContent: 'center',width:320, height:40,}}>
                      <Text style = {{color: '#3A9BFF',fontSize: 16,fontWeight: 'bold',}}> Battle </Text> 
                  </View>
              </TouchableOpacity>
          </View>


          <View style={styles.sommaireContainer}>
              <View style={styles.sommaireTitle}>
                 <Text style={styles.title}> Sommaire du cours </Text>
                 <View style={{marginTop: 5,flex:1,flexDirection: 'row', justifyContent: 'center',}}>
                  <TouchableOpacity style={{flex:1,}} onPress={() => this.props.navigation.navigate('')}>
                      <Image style={{width: 20,height: 20,}} source={require("./images/pinkStar.png")}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,}} onPress={() => this.props.navigation.navigate('')}>
                    <Image style={{width: 20,height: 20,}} source={require("./images/pinkStar.png")}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,}} onPress={() => this.props.navigation.navigate('')}>
                      <Image style={{width: 20,height: 20,}} source={require("./images/pinkStar.png")}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,}} onPress={() => this.props.navigation.navigate('')}>
                      <Image style={{width: 20,height: 20,}} source={require("./images/pinkStar.png")}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,}} onPress={() => this.props.navigation.navigate('')}>
                      <Image style={{width: 20,height: 20,}} source={require("./images/pinkStar.png")}/>
                  </TouchableOpacity>
                 </View>
              </View>
              <View style={styles.sommaireContent}>
                  <Text style={styles.dashTitle}> Chapitres </Text>

                  <FlatList vertical data={chapitres} renderItem={({ item: rowData }) => {
                      return (
                      <View stye={{flex:1, flexDirection: 'column'}}>
                        <TouchableOpacity style={{flex: 1,}} onPress={() => this.props.navigation.navigate('Cours')}>
                            <TouchableHighlight underlayColor='#f1f1f1' onPress={() => this.props.navigation.navigate('Cours')}>   
                                <Text style={styles.title}> {rowData.chapitre}</Text>
                            </TouchableHighlight>
                          </TouchableOpacity>

                          <TouchableOpacity style={{flex: 1,}}  onPress={() => this.props.navigation.navigate('')}>
                            <TouchableHighlight underlayColor='#f1f1f1' onPress={() => this.props.navigation.navigate('Cours')}>   
                                <Text style={{color: '#535376', fontSize: 11, marginLeft: 10,}}> - {rowData.cours1}</Text>
                            </TouchableHighlight>
                          </TouchableOpacity>

                          <TouchableOpacity style={{flex: 1,}}  onPress={() => this.props.navigation.navigate('Cours')}>
                            <TouchableHighlight underlayColor='#f1f1f1' onPress={() => this.props.navigation.navigate('Cours')}>   
                                <Text style={{color: '#535376', fontSize: 11, marginLeft: 10,}}> - {rowData.cours2}</Text>
                            </TouchableHighlight>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flex: 1,}}  onPress={() => this.props.navigation.navigate('Cours')}>
                            <TouchableHighlight underlayColor='#f1f1f1' style={{flex: 1,}}  onPress={() => this.props.navigation.navigate('Cours')}>   
                               <Text style={{color: '#535376', fontSize: 11, marginLeft: 10,}}> - {rowData.cours3}</Text>
                            </TouchableHighlight>
                          </TouchableOpacity>
                      </View>
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}/>
              </View>
          </View>
          <View style={styles.container}>
             <Bas/>
          </View>
        </View>
      </ScrollView>
      )
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  Cours / Question  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class QuestionScreen extends React.Component {


  static navigationOptions = {
    drawerLabel: 'Questions',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/menu.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };



  render() {
    return (
        <View style={styles.container}>
        <View style={styles.boxwhite}>
          <View style={{flex: 1, backgroundColor: '#DCE2EE',}}>
            <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#F1F1F1'}}>
              <Text style={{fontSize: 20,flex:2, textAlign: 'left', color: '#535376', marginTop: 10,}}> Etre un leader </Text>

              <View style={styles.boxPoint}>
                <Text style={{fontSize: 12, textAlign: 'center', color: 'white',}}> x 3 </Text>
                <Text style={{fontSize: 10,borderTopColor: 'white',borderTopWidth:1, color: 'white',}}> Points </Text>
              </View>
            </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#3A9BFF'}}>
            <Text style={{fontSize: 20,flex:2, textAlign: 'left', color: 'white', marginTop: 10,}}> Question </Text>
            <Text style={{fontSize: 20,flex:2, textAlign: 'right', color: 'white', marginTop: 10,}}> 1/12 </Text>
            <TouchableOpacity style={{flex:1,justifyContent: 'center', alignItems: 'center',}} onPress={() => this.props.navigation.navigate('Question')}>
                  <Image style={{width: 30,height: 30,}} source={require("./images/suivant.png")}/>
            </TouchableOpacity>
            </View>

          <View style={styles.boxquestion}>
              <Text style={{padding: 20, fontSize: 12, textAlign: 'center', color: '#535376'}}> Comment une entreprise favorise-t-elle l’épanouissement de ses employés ? </Text>

              <View style={styles.boxreponse}>
                <View style={styles.boxButton}>
                  <Button
                small
                title=" Des cookies"
                onPress={() => this.props.navigation.navigate('')}
                />
                </View>
              </View>


              <View style={styles.boxreponse}>
              <View style={styles.boxButton}>
                <Button
                title="Des tickets restaurant"
                onPress={() => this.props.navigation.navigate('')}
                />
                </View>
              </View>

              <View style={styles.boxreponse}>
              <View style={styles.boxButton}>
                <Button
                title="Des punitions"
                onPress={() => this.props.navigation.navigate('')}
                />
                </View>
              </View>
            </View>
         </View>

         <View style={styles.boxbottom}>
              <View style={{flex: 1, flexDirection: 'row',}}>
                <View style={{flex: 1, width: '100%',}}>
                  <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.navigate('Indice')}>
                    <Image style={{width: 30,height: 30,}} source={require("./images/Indice.png")}/>
                    <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}> Indice </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.navigate('Animation')}>
                    <Image style={{width: 30,height: 30,}} source={require("./images/Video.png")}/>
                    <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}> Video </Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          </View>
    );
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  Cours / Indice  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class IndiceScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.boxwhite}>
          <View style={{flex: 1, backgroundColor: '#DCE2EE',}}>
              <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#F1F1F1'}}>
                <Text style={{fontSize: 20,flex:2, textAlign: 'left', color: '#535376', marginTop: 10,}}> Etre un leader </Text>

                <View style={styles.boxPoint}>
                  <Text style={{fontSize: 12, textAlign: 'center', color: 'white',}}> x 3 </Text>
                  <Text style={{fontSize: 10,borderTopColor: 'white',borderTopWidth:1, color: 'white',}}> Points </Text>
                </View>
              </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#3A9BFF'}}>
            <Text style={{fontSize: 20,flex:1, textAlign: 'left', color: 'white', marginTop: 10,}}> Indice </Text>
            <Text style={{fontSize: 20,flex:1, textAlign: 'right', color: 'white', marginTop: 10,}}> 1/12 </Text>
          </View>

          <View style={styles.boxquestion}>
            <Text style={{marginBottom: 0, fontSize: 20, marginTop: 100, textAlign: 'center', color: '#535376'}}> Comment une entreprise favorise-t-elle l’épanouissement de ses employés ? </Text>
            <View style={styles.boxreponse}>
                <Text style={{ fontStyle: 'italic', marginTop: 100, textAlign: 'center', color: '#535376'}}> Chaque entreprise doit veiller à mettre en place un environnement qui favorise l’épanouissement personnel des employés. Toutefois pour qu’un attachement soit possible il faut que l’entreprise et ses employés partagent les mêmes valeurs et que l’employeur soit à l’écoute des attentes et des besoins de ses employés. </Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>


    );
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  Cours / Video  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class AnimationScreen extends React.Component {
  state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

  render() {
		const { width } = Dimensions.get('window');


    return (
      <View style={styles.container}>
				<View style={styles.boxwhite}>
          <View style={{ backgroundColor: '#DCE2EE',}}>
                <View style={{flexDirection: 'row', backgroundColor: '#F1F1F1', height: 50, borderBottomColor: '#3A9BFF',borderBottomWidth:1,}}>
                  <Text style={{fontSize: 16, textAlign: 'left', color: '#3A9BFF', marginTop: 10,}}> Introduction au management </Text>
                </View>
            </View>
						<Video
							source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
							shouldPlay={this.state.shouldPlay}
							resizeMode="cover"
							style={{ width, height: 300 }}
							isMuted={this.state.mute}
						/>
						<View style={styles.controlBarFull}>
							<MaterialIcons
								name={this.state.mute ? "volume-mute" : "volume-up"}
								size={45}
								color="white"
								onPress={this.handleVolume}
							/>
							<MaterialIcons
								name={this.state.shouldPlay ? "pause" : "play-arrow"}
								size={45}
								color="white"
								onPress={this.handlePlayAndPause}
							/>
						</View>
					</View>
      </View>
		);
  }
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Navigator ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Dashboard: DashboardScreen,
    Cours: CoursScreen,
    Question: QuestionScreen,
    Indice: IndiceScreen,
    Animation: AnimationScreen,
  },
  {
    initialRouteName: 'Home',
  }
);



const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Question: {
    screen: QuestionScreen,
  },
});

export default class App extends React.Component {
  render() {
  return (
      <RootStack />
  );
  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Style of the app ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    flex: 1,
    alignSelf: 'stretch',   
    backgroundColor: '#3A9BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    flex: 1,
    width: '100%',
  },

  boxgrey: {
    flex: 2,
    backgroundColor: '#DCE2EE',
    width: '100%',
  },

  boxbottom: {
    flex: 2,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },

  boxwhite: {
    flex: 12,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 20,
  },


  boxblue: {
    flex: 1,
    backgroundColor: '#3A9BFF',
    alignItems: 'center',
  },

  boxquestion: {
    flex: 4,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',

  },

  boxreponse: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  frontbox: {
    flex: 1,
    width: 400,
    height: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },


  containerbottom: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },



  logo: {

    flex: 1,
    width: 250,
    height: 40,
    resizeMode: 'contain',

  },

  front: {
    flex: 1,
    width: '100%',
    height: '100%',

  },

  logoTop: {
    width: 125,
    height: 20,
    resizeMode: 'contain',

  },


  button: {
    marginTop: 10,
  },
  homeButton: {
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#3A9BFF',
    padding: 4,
    borderWidth: 1,
    borderColor: 'white',
  },

  boxText: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#DCE2EE',
    borderRadius: 10,
  },

  boxPoint: {
    width: 50,
    height: 50,
    backgroundColor: '#f08068',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
  },

  boxButton: {
    width: 300,
    height: 40,
    backgroundColor: '#3A9BFF',
    borderRadius: 10,
  },
  homeMessageBox: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  homeMessage: {
    color: '#3A9BFF',
    fontSize: 35,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },

  course: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    width: 110,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  controlBarFull: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    flex: 2,
  },
  link: {
    color: '#3A9BFF',
  },
  cardStyle: {
    padding: 10,
    marginBottom:30,
     width: 160,
      height: 250 
  },
  dashTitle: {
    margin: 10,
    textAlign: 'center',
    color: '#656589',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  //////////////////////////////////////////////////////////////  Cours  ////////////////////////////////////////////////////
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
    width: '100%',
  },
  basetext: {
    fontSize: 11,
    color: '#535376',
  },
  title: {
    flex:2,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    paddingLeft: 5,
    color: '#3A9BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoContainer:{
      flex: 1,
      marginBottom: 20,
      marginLeft: 20,
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
      borderColor: '#3A9BFF',
      borderWidth: 1,
      marginTop: 10,
      height:40,
  },

  sommaireContainer:{
      flex:1,
      flexDirection: 'column',
      padding: 10,
      margin: 10,
  },

  sommaireTitle: {
      flex:1,
      flexDirection: 'row',
      backgroundColor: '#f1f1f1',
      borderColor: '#3A9BFF',
      borderWidth: 0.5, 
  },
  sommaireContent: {
      flex:4,
      padding: 10,
      backgroundColor: 'white',
      borderColor: '#3A9BFF',
      borderBottomWidth: 0.5,
      borderRightWidth: 0.5,
      borderLeftWidth: 0.5,
      width: 320,
  },

});
