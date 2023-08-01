const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  adresse: { type: String },
  cin: { type: String, required: true },
  hourSalary: { type: Number },
  StartDate: { type: Date, default: Date.now, required: true },
  EndDate: { type: Date, default: Date.now },
  group:{type:string},
  genre:{type:string},

});
const EmployeeModel = mongoose.model("Employees", EmployeeSchema);

module.exports = EmployeeModel;
