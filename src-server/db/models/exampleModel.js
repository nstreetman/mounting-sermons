const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const itemSchema = new Schema({
  // example of optional fields
  msg:        { type: String, required: true },
  from:       { type: String },
  imgLink:    { type: String },
  rating:     { type: String }

})


module.exports = mongoose.model('Item', itemSchema)
