const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/databaseConfig');

// Define the User model
const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = {Blog};

// // export {Blog}
// // // Synchronize the model with the database
// // sequelize.sync()
// //   .then(() => console.log('User model synchronized with database'))
// //   .catch(err => console.error(err));

// // // Create a new user
// // const newUser = User.create({
// //   name: 'John Doe',
// //   email: 'johndoe@example.com',
// //   password: 'password'
// // })
// //   .then(user => console.log(user))
// //   .catch(err => console.error(err));
