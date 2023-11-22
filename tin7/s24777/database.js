const {Sequelize, DataTypes, DATE} = require('sequelize');

const sequelize = new Sequelize(
    'db', 'root', 'passwd', {
        dialect: 'sqlite',
        host: 'localhost'
    }
);

const user = sequelize.define(
    'user', {
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        PESEL: DataTypes.NUMBER,
        BirthDate: DataTypes.DATE,
        height: DataTypes.NUMBER,
        city: DataTypes.STRING
    }
);

await user.sync();

await user.create({
        login: 'a',
        password: 'b',
        name: 'a',
        surname: 'a',
        PESEL: 12345678910,
        BirthDate: Date.now(),
        height: 170,
        city: 'aaa'
});

module.exports = sequelize;