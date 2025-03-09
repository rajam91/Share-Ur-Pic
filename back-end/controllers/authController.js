const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
const { Pool } = require('pg');

const pool = new Pool({
    user: 'newuser',
    host: 'localhost',
    database: 'picapp',
    password: 'password',
    port: 5432,
  });

dotenv.config();

const secret_key = process.env.SECRET_KEY ;

const register = async (req, res) => {
    const { name, firstname, mail, password } = req.body

    try {
        const existingUser = await pool.query('SELECT * FROM users where mail = $1',[mail]);
        if (existingUser.rows.length > 0 ) {
            return res.status(409).json({error:'Email already in use.'});
        }

        const hashedPassword = await bcrypt.hash(password,10);
 
        await pool.query(
            'INSERT INTO users (name, firstname, mail, password) values ($1,$2,$3,$4)',
            [name, firstname, mail, hashedPassword]
        );

        res.status(201).json({message: 'You have been registered !'})

    } catch (err){
        console.error(err);
        res.status(500).json({error: 'Server error'})
    }
};


const login = async (req, res) => {
    const { mail, password } =req.body;

    try {
        const user = await pool.query('SELECT password FROM users WHERE mail = $1',[mail])
        if (user.rows.length === 0 ){
            return res.status(404).json({error:'Invalid mail or password'})
        };

        const validPassword = await bcrypt.compare(password,user.rows[0].password);

        if (!validPassword){
            return res.status(401).json({error: 'Invalid mail or password'})
        }

        const token = jwt.sign({
            userId: user.rows[0].id
        }, secret_key , { expiresIn : '1h'});
        res.json(token);

    } catch(err){
        console.error(err)
        res.status(500).json({error: 'Server error'});
    }
};


const googleAuth = (req, res) => {
    try {
        const token = jwt.sign({ userId: req.user.id }, SECRET_KEY, { expiresIn: '7d' });
        res.redirect(`/auth/success?token=${token}`);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'authentification Google' });
    }
};

module.exports = { register,googleAuth,login };