import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import * as buttomNavActions from '../../redux/actions/ButtomNavActions';

class ButtomNavButtonFactory extends Component {

    switchScreens(screen) {
        
        switch (screen) {
            
            case 'Tdb': {
                return this.props.dispatch(buttomNavActions.displayTdb())
            }                
            
            case 'Biens': {
                return this.props.dispatch(buttomNavActions.displayBiens())
            }     
            
            case 'Locataires': {
                return this.props.dispatch(buttomNavActions.displayLocataires())
            } 

            case 'Loyers': {
                return this.props.dispatch(buttomNavActions.displayLoyers())
            } 

            case 'Cdb': {
                return this.props.dispatch(buttomNavActions.displayCdb())
            } 

            case 'Penalites': {
                return this.props.dispatch(buttomNavActions.displayPenalites())
            } 

            case 'Index': {
                return this.props.dispatch(buttomNavActions.displayIndex())
            } 

            case 'Etat': {
                return this.props.dispatch(buttomNavActions.displayEtat())
            } 
                       
            default:
                break;
        }
    }
    
    render() {

        const images = {
            dashboard: require('../../assets/images/dashboard.png'),
            building: require('../../assets/images/building.png'),
            tenant: require('../../assets/images/tenant.png'),
            accounting: require('../../assets/images/accounting.png'),
            contract: require('../../assets/images/contract.png'),
            analytics: require('../../assets/images/analytics.png'),
            gas: require('../../assets/images/gas.png'),
            penalty: require('../../assets/images/penalty.png'),
            power: require('../../assets/images/power.png'),
            dot: require('../../assets/images/dot.png')
        }

        let buttonCreator = this.props.name.map((item, key) => {

            let iconPlacer = item == 'Tdb' ? images.dashboard : 
            item == 'Biens' ? images.building : 
            item == 'Locataires' ? images.tenant : 
            item == 'Loyers' ? images.accounting :
            item == 'Cdb' ? images.contract : 
            item == 'Penalites' ? images.analytics : 
            item == 'Index' ? images.gas : 
            item == 'Etat' ? images.penalty : 
            item == 'Deconnexion' ? images.power : null

            return (
                <TouchableOpacity key={key} onPress={()=> this.switchScreens(item)}
                style={{ alignItems: 'center', width:50 }}>

              {item == 'Tdb' ? <Image style={{ height: 8, width: 8, marginTop: 3 }}
                source={require('../../assets/images/dot.png')} /> : null}

              <Image style={{ resizeMode: 'center' }}
                source={iconPlacer} />

            </TouchableOpacity>
            )
        })

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}>
                {buttonCreator}
            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

const mapStateToProps = state => ({
    buttomNavState: state.buttomNavState
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtomNavButtonFactory)