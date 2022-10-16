const { Schema, model, models } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: true,
    index: true,
  },
  salt: {
    type: String,
    required: true,
    index: true,
  },
  shops: {
    type: [Schema.Types.ObjectId],
    ref: "Shop",
    default: []
  }
});

userSchema.plugin(uniqueValidator);

module.exports = models?.User || model("User", userSchema);