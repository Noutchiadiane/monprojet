import React, { Component } from 'react';
// import Homepage from './Homepage'
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar,ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/LoginStyle';
import { connect } from 'react-redux';
import * as signinActions from '../redux/actions/signinActions'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
        }
    } _authenticate = async () => {

        if (this.state.username === '') {
            alert('Veillez entrer le Nom d`utilisateur')
        }
        else if (this.state.password === '') {
            alert('Veillez entrer le Mot de passe')
        }
        else {

            this.setState({ loading: true })

            let user = {
                username: this.state.username,
                password: this.state.password
            }

            this.props.dispatch(signinActions.onSignin(user))

            this.setState({ loading: false })

        }
    }


    _singnup() {
        Actions.Singnup();
    }

    render() {
        let { signinState } = this.props;

        if (this.state.loading) {
            return (
                <View style={styles.activityIndicatorView}>
                    <ActivityIndicator color='#214383' size='large' />
                </View>
            );
        }

        return (
            <View style={styles.appStyle} >
                <StatusBar backgroundColor="#00897b" barStyle="light-content" />

                <View style={styles.logContainer}>
                    <View style={styles.logContainer}>
                        <Image source={require('../images/download.jpg')} style={styles.logoImage}></Image>
                        <Text style={styles.logoText}>Welcome to my app.</Text>
                    </View>
                    
            <View style={styles.logContainer}>
                <View>
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
                    <TouchableOpacity style={styles.buttonForm} onPress={this._authenticate}>
                        <Text style={styles.buttonTextForm}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

                    <View style={styles.SingupTextContent}>
                        <Text style={styles.SingupText} >Don't have an account yet? </Text>
                        <TouchableOpacity onPress={this._singnup}><Text style={styles.SingupButtont}>Signup</Text></TouchableOpacity>
                    </View>

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)
