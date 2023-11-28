var express = require('express');
var router = express.Router();
var { User } = require('../models');

router.get('/',  async function(req, res, next) {

    //User.truncate();
    /*User.create({
        login: 'test3',
        password: 'test3',
        name: 'test3',
        surname: 'test3',
        pesel: 126,
        birthDate: Date.now(),
        height: 2.21,
        city: 'testCity3'
    });*/

    const users = await User.findAll();
    const userAttributes = Object.keys(User.rawAttributes);

    res.render('list', { title: 'List', users, userAttributes });
});

router.get('/:id', async function(req, res, next){

    const id = req.params.id;
    const detailedUser = await User.findByPk(id);
    const userAttributes = Object.keys(User.rawAttributes);

    res.render('singleObject', {title: 'Details', detailedUser, userAttributes})
});

module.exports = router;