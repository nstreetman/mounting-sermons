const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const sermonSchema = new Schema({
  // example of optional fields
  pastor:       { type: String, required: true },
  series:       { type: String, required: true },
  campus:       { type: String, required: true},
  date:         { type: Date,   required: true},
  ytVideoId:    { type: String, required: true },
  filestackUrl: { type: String, required: true }
  
})


module.exports = mongoose.model('Sermon', sermonSchema)
