const { empdbms } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("emplyee", {
      name: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Employee;
  };