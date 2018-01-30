import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


class App extends Component{

  state = {
    username: '',
    password: ''
  }


  render(){
    return(
      <View style={styles.container}>

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
            <TouchableOpacity style={ styles.loginButton }><Text style={ styles.loginButtonText }>Login / Registration</Text></TouchableOpacity>
          </View>

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
