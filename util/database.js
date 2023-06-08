const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','puja@23$Q#56',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;