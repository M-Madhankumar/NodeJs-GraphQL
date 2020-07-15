const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize("projectManagement", "root", "welcome-123", {
    host: 'localhost',
    dialect: 'mysql',   //database you are connecting to
    operatorsAliases: false,    //String based operator alias. Pass object to limit set of aliased operators
    freezeTableName: true, //prevent sequelize from pluralizing table names
    pool: {
        max: 5, //Maximum number of connection in pool
        min: 0, //Minimum number of connection in pool
        acquire: 30000, //The maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000 //The maximum time, in milliseconds, that a connection can be idle before being released.
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
