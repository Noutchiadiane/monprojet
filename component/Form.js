import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import Homepage from './Homepage'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyle'

import * as signinActions from '../redux/actions/signinActions'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
        }
    }
    _authenticate = async () => {

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
                        <Text style={styles.buttonTextForm}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        )


    }
    
}
const mapStateToProps = state => ({
    signinState: state.signinState,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)