
var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const eprintSchema = new Schema({
  _id:{type:Schema.Types.ObjectId, required:true},
  title:{ type:String, required:true, unique:true },
  url: { type:String, required:true },
  date:{ type:Date, default:Date.now },
  //to mark the article as saved or not
  saved: { type: Boolean, required: true, default: false
  },
  { _id:false }
);

const eprint = mongoose.model("eprint", eprintSchema);
module.exports = eprint;

