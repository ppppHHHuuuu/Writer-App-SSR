require('dotenv').config();
const {Sequelize } = require('sequelize');

const sequelize = new Sequelize('document_database',process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
})

async function testConnection () {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }  
  }
  testConnection();

//nope this doesnt bring code to db, not this shit
// but instead do this Sync the Sequelize model with the database
sequelize.sync().then(() => {
    console.log('Database synchronized successfully.');
  }).catch((error) => {
    console.error('Unable to sync the database:', error);
  });  

module.exports = {sequelize};

