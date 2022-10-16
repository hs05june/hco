const { Schema, model, models } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const shopSchema = new Schema({
  owners: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
    required: true,
    index: true,
  },
  items: {
    type: [Schema.Types.ObjectId],
    ref: "Item",
    default: []
  },
  employees: {
    type: [Schema.Types.ObjectId],
    ref: "Employee",
    default: []
  }
});

shopSchema.plugin(uniqueValidator);

module.exports = models?.Shop || model("Shop", shopSchema);