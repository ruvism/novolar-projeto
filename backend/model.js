var mongoose = require('mongoose'); 
// require('mongoose-type-email');

var Schema = mongoose.Schema;

let AdocaoSchema = new Schema({
    animal:{
        _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
        name: { type: String},
        description: { type: String},
        images: { type: String },  
        email: { type: String},
        telefone: { type: String}
            }
    });

module.exports = mongoose.model("adocao", AdocaoSchema);
