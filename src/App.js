import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';


class App extends Component{


  componentWillMount(){
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    });

    firebase.auth().onAuthStateChanged( (user) => {

      if( user ){
        this.setState({
          uid: user.uid,
          loggedIn: true,
        });

      }else{
        this.setState({
          loggedIn: false,
          title: 'Login'
        });
      }

    } );

  }


  state = {
    username: '',
    password: '',
    authError: '',
    loggedIn: null
  }


  loginButton(){
    console.log('clicking this button');
    const { username , password } = this.state;
    firebase.auth().signInWithEmailAndPassword( username, password )
      .catch( ()=>{
        firebase.auth().createUserWithEmailAndPassword( username, password ).
          catch( ()=>{
            this.setState({
              authError: 'Authentication failed!'
            })
          } )
      } )
  }

  render(){
    return(
      <View style={styles.container}>

          {
            !this.state.loggedIn ?
                <View>
                  <View style={styles.inputContainer}>
                        <TextInput
                          placeholder = {"Username"}
                          autoCorrect = {false}
                          style = {styles.inputStyle}
                          value = { this.state.username }
                          onChangeText = { username => this.setState({ username }) }
                        />
                  </View>

                  <View style={styles.inputContainer}>
                        <TextInput
                          placeholder = {"Password"}
                          autoCorrect = {false}
                          style = {styles.inputStyle}
                          value = { this.state.password }
                          onChangeText = { password => this.setState({ password })  }
                          secureTextEntry
                        />
                  </View>

                  <View style={ styles.inputContainer }>
                    <TouchableOpacity style={ styles.loginButton }><Text style={ styles.loginButtonText } onPress={ ()=>{this.loginButton()} }>Login / Registration</Text></TouchableOpacity>
                  </View>

                  <View>
                    <Text>{ this.state.authError }</Text>
                  </View>
                </View>
          : <View><Text>Logged in!</Text></View>

          }


      </View>
    )
  }

}


const styles = {

  container: {
    marginTop: 40,
    padding: 20
  },

  inputContainer: {
    marginTop: 10,
    marginBottom: 10
  },

  inputStyle: {
    padding: 10,
    backgroundColor: '#E2E2E2',
    width: '100%'
  },

  loginButton: {
    backgroundColor: '#000000',
    padding: 10
  },

  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center'
  }

};

export default App;
