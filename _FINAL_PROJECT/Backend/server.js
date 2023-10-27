const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; // Galite naudoti kitą portą, jei reikia
const router = express.Router();


//Sukuriame ryšį su MySql duomenų baze
const db = mysql.createConnection({
    host: 'localhost',
    user: 'jūsų_vartotojas',
    password: 'jūsų_slaptažodis',
    database: 'jūsų duomenų bazės pavadinimas',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Nepavyko prisijungti prie MySQL:', err);
    } else {
      console.log('Sėkmingai prisijungėte prie MySQL');
    }
  });
  
  // API maršrutas, kuris grąžina "Sveiki, tai mano API!"
router.get('/', (req, res) => {
    res.send('Sveiki, tai mano API!');
  });
  
  module.exports = router;