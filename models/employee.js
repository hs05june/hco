import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  shopID: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    index: true,
  },
  paymentInterval: {    // ['daily', 'weekly', 'monthly']
    type: String,
    required: true,
  }
});

employeeSchema.plugin(uniqueValidator);

export default models?.Employee || model("Employee", employeeSchema);