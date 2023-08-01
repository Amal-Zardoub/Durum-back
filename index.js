const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Durum:2pCMygPn9pSIE9cG@cluster0.olb9iqc.mongodb.net/Durum-db"
);
const app = express();
const port = 7000;
const EmployeeModel = require("./Models/Employees");
const WorkModel=require("./Models/Work")

app.get("/employees", async (req, res) => {
  const Employees = await EmployeeModel.find();
  res.json(Employees);
});

app.get("/work", async (req, res) => {
  const Work = await WorkModel.find();
  res.json(Work);
});

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.listen(port, () => {
  console.log(`Durum app is listening on port"${port}!`);
});
