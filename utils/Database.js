var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name: 'mon_projet.db', createFromLocation: '~mon_projet.db' })

export default db;