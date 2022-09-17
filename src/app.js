const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

module.exports = app;