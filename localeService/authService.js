import db from '../../utils/Database';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

export const signin = (payload) => {
   
    db.transaction((tx) => {
        tx.executeSql('select * from compte_utilisateur where login=? and password=? ', [payload.user.username, payload.user.password], (tx, results) => {
                 
          if (results.rows.length == 0) {

            alert('Nom d`utilisateur ou Mot de passe incorrecte !')

          } else { 
           
            AsyncStorage.setItem('username',payload.user.username)
            Actions.screenContainer()

          }

        })
      })
}