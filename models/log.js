import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const logSchema = new Schema({
  typeOfTransaction: { // ['sell', 'restock']
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

export default models?.Log || model("Log", logSchema);