const { Schema, model, models } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const logSchema = new Schema({
  typeOfTransaction: { // ['sell', 'restock']
    type: String,
    required: true,
    index: true,
    enum: {
      values: ["sell", "restock"],
      message: "paymentInterval can be either 'sell' or 'restock'",
    }
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
  itemID: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  numberOfItems: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
}, {timestamps: true});

logSchema.plugin(uniqueValidator);

module.exports = models?.Log || model("Log", logSchema);