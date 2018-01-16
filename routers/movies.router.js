'use strict';

//Imports and initializations

const express = require('express');
const router = express.Router();
const { DATABASE_URL, PORT } = require('../config');
const { Movies }  = require('../models.js');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

console.log('router works!');
router.use(morgan('common'));
router.use(bodyParser.json());


//Endpoints
router.get('/', (req, res) => {
  Movies
    .find()
    .then(movies => {
      console.log(movies);
      res.json(movies);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

router.get('/:id', (req, res) => {
  Movies
    .findById(req.params.id)
    .then(movie => res.json(movie.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went horribly awry' });
    });
});

router.post('/', (req, res) => {
 
});

router.put('/:id', (req, res) => {
 
});

router.delete('/:id', (req, res) => {
 
});




module.exports = router;
