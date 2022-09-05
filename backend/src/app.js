const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// ==> Importar o arquivo: 'db.config.js'
const database = require('./config/db.config'); // ==> conexão local da base de dados

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

// ==> Rotas da API
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.json({ type: 'application/vdn.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);
app.use('/api/v1', userRoutes)

module.exports = app;