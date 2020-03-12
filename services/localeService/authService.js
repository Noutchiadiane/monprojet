import db from '../../utils/Database';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

export const signin = (payload) => {
   console.log("jentre")
    db.transaction((tx) => {
        tx.executeSql('select * from monprojet where user_name=? and password=? ', [payload.user.username, payload.user.password], (tx, results) => {
                 
          if (results.rows.length == 0) {

            alert('Nom d`utilisateur ou Mot de passe incorrecte !')

          } else { 
           
            AsyncStorage.setItem('username',payload.user.username)
            Actions.Singnup()

          }

        })
      })
}
export const createHero = (hero: m) => {
  return new Promise((resolve, reject) => {
      let msg = new Message();
      if (!hero) {
          msg.result = false;
          msg.message = 'Invalid hero input!';
          resolve({ result: msg.result, message: msg.message });
      }

      sqlite.transaction((tx) => {
          tx.executeSql('INSERT INTO Hero(HeroName) VALUES (?)', [hero.heroName], (tx, results) => {
              if (results.rowsAffected > 0) {
                  msg.result = true;
                  msg.message = 'Create new hero successfully!';
              } else {
                  msg.result = false;
                  msg.message = 'Create new hero failed!';
              }
              resolve({ result: msg.result, message: msg.message });
          }, (error) => {
              msg.result = false;
              msg.message = `${error.message}`;
              resolve({ result: msg.result, message: msg.message });
          });
      })
  });
}
