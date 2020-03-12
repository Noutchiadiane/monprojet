import React, { Component } from 'react';
import { View, TouchableOpacity,
    Text, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class DrawerButtonFactory extends Component {

    switchForms(form) {

        switch (form) {
            case 'addBien': return Actions.addBien();
        
            case 'addBatiment': return Actions.addBatiment()
                        
            case 'addLogement': return Actions.addLogement()
        
            default:
                break;
        }
    }

    render() {

        const images = {
            addUser: require('../../assets/images/add-user.png'),
            debt: require('../../assets/images/debt.png'),
            settings: require('../../assets/images/settings.png'),
            signout: require('../../assets/images/power-white.png'),
            userprofile: require('../../assets/images/userprofile.png'),
            buildings: require('../../assets/images/buildings.png'),
            building: require('../../assets/images/building-white.png'),
            add: require('../../assets/images/add.png'),
            homeEmpty: require('../../assets/images/home-empty.png'),
        }

        let buttonCreator = this.props.name.map((item, key) => {

            let iconPlacer = item[0] == 'addUser' ? images.addUser : 
            item[0] == 'debt' ? images.debt : 
            item[0] == 'settings' ? images.settings : 
            item[0] == 'signout' ? images.signout :
            item[0] == 'userprofile' ? images.userprofile : 
            item[0] == 'building' ? images.building : 
            item[0] == 'buildings' ? images.buildings : 
            item[0] == 'homeEmpty' ? images.homeEmpty : 
            item[0] == 'add' ? images.add : images.settings

            return (
                <TouchableOpacity key={key} onPress={()=>this.switchForms(item[2])}
                style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                    <Image style={{ width: 25, height: 25, marginRight: 10 }}
                        source={iconPlacer} />

                    <Text style={{ color: '#fff', fontSize: 15, letterSpacing: 1 }}>{item[1]}</Text>

                </TouchableOpacity>
            )
        })

        return (
            <View>
                {buttonCreator}
            </View>
        )
    }
}