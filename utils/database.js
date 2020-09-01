const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize("projectManagement", "root", "welcome-123", {
    host: 'localhost',
    dialect: 'mysql',   //database you are connecting to
    operatorsAliases: false,    //String based operator alias. Pass object to limit set of aliased operators
    freezeTableName: true, //prevent sequelize from pluralizing table names
    underscored: true,
    pool: {
        max: 5, //Maximum number of connection in pool
        min: 0, //Minimum number of connection in pool
        acquire: 30000, //The maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000, //The maximum time, in milliseconds, that a connection can be idle before being released.
        logging: true,
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

let models = [
    require('../models/userRoles.js'),
    require('../models/users.js'),
    require('../models/status.js'),
    require('../models/priority.js'),
    require('../models/tickets.js'),
    require('../models/comments.js'),
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db[seqModel.name] = seqModel;
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync();
module.exports = db;
