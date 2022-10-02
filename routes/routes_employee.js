const express = require("express");
const router = express.Router();

const Employee = require("../model/employee");

//

router.get("/", async (req, res, next) => {
  let employee;
  try {
    employee = await Employee.find({});
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    mensaje: "registro",
    employee: employee,
  });
});
//

router.post("/hours", async (req, res, next) => {
  const { dni, info } = req.body;
  let checkEmployee;
  try {
    checkEmployee = await Employee.findOne({ dni: dni });
  } catch (err) {
    const error = new Error(err);
    error.code = 500;
    return next(error);
  }
  if (!checkEmployee) {
    const newEmployee = new Employee({
      dni,
      info,
    });
    try {
      await newEmployee.save();
    } catch (error) {
      console.log(error.message);
      const err = new Error("No se han podido guardar los datos");
      err.code = 500;
      return next(err);
    }
  }
});

module.exports = router;
