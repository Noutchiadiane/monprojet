import db from '../../utils/Database';
import { Actions } from 'react-native-router-flux';

export const fetchBiens = () => {

 db.transaction((tx) => {
    tx.executeSql('SELECT * FROM cite', [], (tx, results) => {

      let biens = [];

      for (let index = 0; index < results.rows.length; index++) {

        biens[index] = results.rows.item(index);

      }
      // i can't return anything here
     

    })
    
  })

  //return 
  
}