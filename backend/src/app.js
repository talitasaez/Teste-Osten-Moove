require('dotenv').config();
const cors = require('cors');
const express = require('express');

const companyRoute = require('./routers/companyRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/company', companyRoute);

module.exports = app;
