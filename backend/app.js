const express = require('express');
const app = express();
const adocaoModel = require('./model');
const mongoose = require('mongoose')
//const path = require('path')
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
app.use(express.static('front-end/'))
app.use(allowCrossDomain);
app.use(express.json());

app.post('/api/doar', function (req, res) { 
  const adicionarAnimais = req.body
  console.log(adicionarAnimais)
  let model = new adocaoModel(adicionarAnimais)
  model.save(adicionarAnimais)
  res.send();
});

app.get("*", (req, res)=> {
    res.sendFile(path.resolve('front-end/'))
})

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
