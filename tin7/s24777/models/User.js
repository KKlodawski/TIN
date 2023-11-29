module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            surname: DataTypes.STRING,
            pesel: DataTypes.INTEGER,
            birthDate: DataTypes.DATEONLY,
            height: DataTypes.FLOAT,
            city: DataTypes.STRING
        }
    );
    return User;
}
