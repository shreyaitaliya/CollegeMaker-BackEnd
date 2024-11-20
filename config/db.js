const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('College_Grid_Art', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

sequelize.authenticate().then(() => {
    console.log('connected');
}).catch((error) => {
    console.log(error);
    return false;
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false, alter: false }).then(() => {
    console.log('yes re-sync');
})

module.exports = db;    