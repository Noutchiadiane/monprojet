import React, {Component} from 'react';
import { 
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import OfflineNotice from './OfflineNotice';

export default class Homepage extends Component {

constructor(props){
  super(props);
  
} 

  render() {
    const {navigate} = this.props.navigation;
    return ( 
      <ImageBackground source={require('../assets/images/bg_img2.png')} style={styles.backgroundImg} >
        
      <View style={{flex: 1, flexDirection:'column', alignItems:'center'}}>
       <Image source={require('../assets/images/maisonier.png')} style={styles.logoImg} />
       
       <View style={{flex: 2, alignItems:'center',marginBottom:5}}>

       <ScrollView>
       <View style={{flexDirection:'row', alignSelf:'center'}}>
       <TouchableOpacity onPress={() => navigate('Test')}>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/tdb.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Tableau de bord</Text>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity style={{marginLeft:40}}>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/biens.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Biens</Text>
       </View>
       </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/locataires.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Locataires</Text>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity style={{marginLeft:40}}>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/loyers.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Loyers</Text>
       </View>
       </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/cdb.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Contrats de bails</Text>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity style={{marginLeft:40}}>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/penalites.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Pénalités</Text>
       </View>
       </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/index.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Index</Text>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity style={{marginLeft:40}}>
       <View style={[styles.textInputView,{marginTop:30}]} >
       <Image source={require('../assets/images/etat.png')} style={{width:100,height:80}} />
       <Text style={{color:'#fff'}}>Etat</Text>
       </View>
       </TouchableOpacity>
       </View>

       </ScrollView>
       
      </View>

      <OfflineNotice />

      <View style={styles.footer}> 
      <Text style={{color:'#fff'}}>© Flysoft Engineering 2020</Text>
      </View>
      
       </View>
       </ImageBackground>
    ); 
  }
}; 

let styles = StyleSheet.create({
  textInputView:{    
    borderRadius:10, 
    borderColor:'#091337', 
    backgroundColor:'rgba(9,19,55,.7)', 
    flexDirection:'column',
    alignItems: 'center',
    padding:5
  }, 
  logoImg: {
    width:280, 
    height: 70, 
    marginTop:10,
    resizeMode: 'center', 
    alignSelf:'center'
  },
  footer: {
    backgroundColor:'rgba(9,19,55,.7)', 
    flexDirection:'column', 
    height:30, 
    width:'100%',
    justifyContent:'center',
    alignItems: 'center'    
  },
  backgroundImg: {
    flex:1
  }
});