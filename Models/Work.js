const mongoose = require("mongoose");
const currentDate=new Date()
const oneWeekPeriod=7*24*60*1000
const futurDate= new Date(currentDate.getTime()+oneWeekPeriod)
const WeekSchema = mongoose.Schema({
  StartDate: { type: Date, default: currentDate, required: true },
  EndDate: { type: Date, default: futurDate },
  prime:{type:Number(), default:0},
  state:{type:String, default:"open"},
  Day: [{ type: mongoose.Schema.Types.ObjectId, ref: "DaySchema" }],
});
const WorkModel = mongoose.model("Work", WeekSchema);
module.exports = WorkModel;
