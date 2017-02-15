var Sequelize = require('sequelize')

var sequelize = new Sequelize('pantharshit00', 'pantharshit00', 'db-pantharshit00-58686', {
    host: 'db.imad.hasura-app.io',
    dialect: 'postgres',
    port:5432
})

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.TEXT
})

sequelize.sync().then(() => {
    console.log("CONNECTED TO DB!")
})

module.exports = User