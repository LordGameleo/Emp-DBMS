module.exports = app => {
    const employees = require("../controller/crud.controller");
  
    var router = require("express").Router();
  
    router.post("/add", employees.create);

    router.get("/list", employees.findAll);
  
    router.get("/id/:id", employees.findById);

    router.post("/name", employees.findByName);

    router.put("/update/:id", employees.update);
  
    router.delete("/remove/:id", employees.delete);
    
    app.use('/api', router);
  };