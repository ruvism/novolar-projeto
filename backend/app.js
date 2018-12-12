const express = require('express');
const app = express();
const adocaoModel = require('./model');
const mongoose = require('mongoose')
require('./conexao')

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(express.json());

app.post('/api/doar', function (req, res) { //console.log(req)
  const adicionarAnimais = req.body
  console.log(adicionarAnimais)
 let model = new adocaoModel(adicionarAnimais)
  model.save(adicionarAnimais)
  //  .then(doc => {
  //    console.log(doc)
  //  })
  //  .catch(err => {
  //    console.error(err)
  //  })
  res.send();
});

app.get('/api/index', function (req, res) {
  let adocao = mongoose.model("adocao", adocaoModel.schema)
  adocao.find({}, function (err, docs) {
  res.send(docs);
  console.log(docs)
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Ouvindo na porta 3000!');
});
