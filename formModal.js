const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formModalSchema = new Schema ({
  name: {type: String},
  email: {type: String}
});

const FormModal = mongoose.model("formInput", formModalSchema);

module.exports = FormModal;