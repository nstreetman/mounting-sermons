const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const itemSchema = new Schema({
  // example of optional fields
  title:        { type: String, required: true },
  description:  { type: String },
  upVotes:      { type: Number, default: 0 },
  createdAt:    { type: Date, default: Date.now }

})


module.exports = createModel('Item', resourceSchema)
