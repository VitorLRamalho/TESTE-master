const Sequelize = require('sequelize');

//Conexão com "DB" MySQL
const sequelize = new Sequelize('postApp', 'root', 'Templo@2000', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};