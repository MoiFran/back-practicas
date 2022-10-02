const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  dni: { type: String, maxLength: 9, required: true },
  info: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
