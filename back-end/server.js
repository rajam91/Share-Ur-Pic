const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('./config/passport.js');
const { register, login, googleAuth } = require('./controllers/authController.js') ;

const { Pool } = require('pg'); 


const pool = new Pool({
  user: 'newuser',
  host: 'localhost',
  database: 'picapp',
  password: 'password',
  port: 5432,
});

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;

app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { session: false }), googleAuth);

app.listen(PORT, () => console.log(`Serveur écoute sur le port ${PORT}`));
