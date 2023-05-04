const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => console.log('User model synchronized with database'))
  .catch(err => console.error(err));

// Create a new user
const newUser = User.create({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password'
})
  .then(user => console.log(user))
  .catch(err => console.error(err));
