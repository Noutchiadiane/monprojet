import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'
import Routes from './Routes/Routes' 
const store = configureStore()

export default class App extends Component {

  render() {

    return (

      <Provider store={store}>

        <Routes /> 
        

      </Provider>




    )


  }
}