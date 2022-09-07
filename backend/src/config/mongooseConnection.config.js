const epxress = require('express');
const mongoose = require('mongoose')

// ==> Importar o arquivo: 'db.config.js'
const database = require('./db.config'); // ==> conexão local da base de dados

mongoose.Promise = global.Promise;

// ==> Conexão de base dados:
mongoose.connect(database.local.localDataBaseUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
  })
.then(() => {
  console.log('A base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de dados...: ${err}`);
  process.exit();
})

