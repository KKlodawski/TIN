var express = require('express');
var router = express.Router();
var { User } = require('../models');
router.get('/', function(req, res, next) {
    res.render('add', { title: 'Add', Error: "" });
});

router.post('/', async function(req, res, next) {
   const { login, password, name, surname, pesel, birthDate, height, city } = req.body;
   console.log({ login, password, name, surname, pesel, birthDate, height, city });
   if ( login === '' || password === '' || name === '' || surname === '' || pesel === '' || birthDate === '' || height === '' || city === '') {
       res.status(400);
       res.render('add', {title: 'Add', Error: 'Some values are null'});
   }
   else if (pesel.length !==11) {
       res.status(400);
       res.render('add', {title: 'Add', Error: 'Pesel must contain 11 numbers!'});
   } else {
       User.create({
           login: login,
           password: password,
           name: name,
           surname: surname,
           pesel: pesel,
           birthDate: birthDate,
           height: height,
           city: city
       });
       res.status(200);
       res.redirect('./list');
   }

});

module.exports = router;