let mongoose = require('mongoose');
const server = 'ds039768.mlab.com:39768'; // REPLACE WITH YOUR DB SERVER
const database = 'adocoesdb';      // REPLACE WITH YOUR DB NAME
require('mongodb')

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://ruvism:1108ruvila@${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()

