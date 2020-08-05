const db = require("../models");
const EmpDB = db.empdbms;
const Op = db.Sequelize.Op;
var fs = require("fs");



exports.create = (req, res) => {
    // Validate request 
    if (!req.body.name) {
        res.status(400).send({
          message: "Name can not be empty!"
        });
        return;
    }
    
    if (req.body.salary < 0) {
        res.status(400).send({
            message: "Salary Can't be negative!"
          });
          return;  
    }

    const employee = {
      name: req.body.name,
      salary: req.body.salary,
      published: req.body.published ? req.body.published : false
    };
  
    EmpDB.create(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding the Employee."
        });
      });
    
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    EmpDB.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });  
};

exports.findById = (req, res) => {
    const id = req.params.id;

    EmpDB.findByPk(id)
      .then(data => {
        res.send([data]);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });  
};

exports.findByName = (req, res) => {
    const name = req.body.name;
    EmpDB.findAll({ where: { name: name  } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Employees."
        });
      });
  };


exports.update = (req, res) => {
    const id = req.params.id;

    EmpDB.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id
        });
      });  
};

exports.delete = (req, res) => {
    const id = req.params.id;

    EmpDB.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employee with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employee with id=" + id
        });
      });  
};

