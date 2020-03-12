import React, { Component } from 'react';
import { Router, Scene,Stack,Actions } from 'react-native-router-flux';

import Login from '../Screens/Login'
import Singnup from '../Screens/Signup';

export default class Routes extends Component {

    render() {
 
        return (

            <Router>
            <Stack key="root" hideNavBar={true}>
              <Scene key="login" component={Login} title="Login" initial />
              <Scene key="Singnup" component={Singnup} title="Singnup"  />
            </Stack>
          </Router>



        )


    }
}