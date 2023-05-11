const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/database.js');

// Define the User model
const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = {Blog};

