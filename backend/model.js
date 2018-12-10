var mongoose = require('mongoose'); 
// require('mongoose-type-email');

var Schema = mongoose.Schema;

let AdocaoSchema = new Schema({
    animal:{
        _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
        name: { type: String},
        description: { type: String},
        images: { type: String },
        contact: {  
            email: { type: String},
            telefone: { type: String}

                }
            }
    //     },
    // {
    //     colletion: "adocoesdb",
    //     versionKey: false,
    //     toObject: { virtuals: true}
    });

// AdocaoSchema.virtual("id").get(function(){
//     return this._id;
// })

let adocoes = mongoose.model("adocao", AdocaoSchema);

module.exports = adocoes;
