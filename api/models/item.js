const { Schema, model, models } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    default: "(no description)",
  },
  shopID: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  leftInStock: {
    type: Number,
    required: true,
    index: true,
  },
  alertAt: {
    type: Number,
    required: true,
    index: true,
  },
  sellPrice: {
    type: Number,
    required: true,
    index: true,
  },
  costPrice: {
    type: Number,
    required: true,
    index: true,
  },
  photoUrl: {
    type: String,
    required: true,
  }
});

itemSchema.plugin(uniqueValidator);
module.exports = models?.Item || model("Item", itemSchema);