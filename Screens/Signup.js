// SignUp.js
import React from 'react'
import {
    View,
    Button,
    TextInput,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from '../styles/LoginStyle'
import { Actions } from 'react-native-router-flux';
import{connect} from 'react-redux'

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '', password: '', email: '', phone_number: ''
        }
    }
    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {
            // here place your signup logic
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }
    _singnup() {
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.appStyle}>
                <View style={styles.logContainer}>
                    <View style={styles.logContainer}>
                        <Image source={require('../images/download.jpg')} style={styles.logoImage}></Image>
                        <Text style={styles.logoText}>Welcome to my app.</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.formTextInput}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Name"
                    placeholderTextColor='#ffffff'
                    selectionColor='#fff'
                    value={this.state.username}
                    onChangeText={(value) => this.setState({ username: value })}
                    onSubmitEditing={() => this.password.focus()} />
                <TextInput
                    style={styles.formTextInput}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor='#ffffff'
                    value={this.state.password}
                    onChangeText={(value) => this.setState({ password: value })}
                    ref={(input) => this.password = input}
                />
                  <TextInput
                    style={styles.formTextInput}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Emails"
                    placeholderTextColor='#ffffff'
                    selectionColor='#fff'
                    value={this.state.username}
                    onChangeText={(value) => this.setState({ username: value })}
                    onSubmitEditing={() => this.password.focus()} />
                  <TextInput
                    style={styles.formTextInput}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Phone numbers"
                    placeholderTextColor='#ffffff'
                    selectionColor='#fff'
                    value={this.state.username}
                    onChangeText={(value) => this.setState({ username: value })}
                    onSubmitEditing={() => this.password.focus()} />
                 <TouchableOpacity style={styles.buttonForm} onPress={this._authenticate}>
                        <Text style={styles.buttonTextForm}>Sign Up</Text>
                    </TouchableOpacity>
                <View style={styles.SingupTextContent}>
                    <Text style={styles.SingupText} >Already have an account </Text>
                    <TouchableOpacity onPress={this._singnup}><Text style={styles.SingupButtont}>Login</Text></TouchableOpacity>
                </View>
            </View>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
  }
  
  const mapStateToProps = state => ({
    signinState: state.signinState,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
