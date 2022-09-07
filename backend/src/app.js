const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes')


app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.json({ type: 'application/vdn.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.set("mongoose connection", mongooseConnection)

app.use(index);
app.use('/api/v1', userRoutes)

module.exports = app;