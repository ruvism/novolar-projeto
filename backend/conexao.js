require('mongodb')
require('dotenv').config()
let mongoose = require('mongoose');
const server = process.env.db || 'localhost'; 
console.log(process.env.db)   // REPLACE WITH YOUR DB SERVER
const database = 'adocoesdb';      // REPLACE WITH YOUR DB NAME

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

