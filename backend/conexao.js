let mongoose = require('mongoose');
const server = process.env.db || 'localhost'; // REPLACE WITH YOUR DB SERVER
const database = 'adocoesdb';      // REPLACE WITH YOUR DB NAME
require('mongodb')

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()

