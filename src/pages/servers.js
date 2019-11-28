const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT email, password FROM users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'johnCENA19',
    database: 'reactdb'
})

connection.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors())

app.get('/', (req, res) => {
    res.send('Connected to server')
})

app.get('/register', (req, res) => {
    const {First_name, Last_name, Email, Password } = req.query;
    const INSERT_PRODUCT_QUERY =  `INSERT INTO users (first_name, last_name, email, password) VALUES ('${First_name}', '${Last_name}', '${Email}', '${Password}')`
    connection.query(INSERT_PRODUCT_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successful added user');
        }
    });
});

app.get('/login', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

app.listen(4000, () => {
    console.log('server 4000')
})