const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./database/connection');
mongoose.set('strictQuery', true);


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const passport = require('./passport-strategies/bearer')


const client = require('./routes/apiClient');
const produit = require('./routes/apiProduit');
const commande = require('./routes/apiCommande');
const authentification = require('./routes/apiAuthentification');

app.use('/api', client);
app.use('/api', produit);
app.use('/api', commande);
app.use('/api', authentification);


app.listen(3000, () => console.log('listening on port 3000!'));
