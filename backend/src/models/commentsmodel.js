const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const commentsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  avatar : {type : String, required : false},
  githubuser : {type : String, required : false},
  isOfensive : {type : Boolean, required : false}
}, {
  timestamps: true
});

const UseComments = model('eagles-comments', commentsSchema);

module.exports = { UseComments };
