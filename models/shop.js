import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

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

export default models?.Shop || model("Shop", shopSchema);