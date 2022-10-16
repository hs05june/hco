const { Schema, model, models } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

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
    enum: {
      values: ["daily", "weekly", "monthly"],
      message: "paymentInterval can be either 'daily' or 'weekly' or 'monthly'",
    }
  }
});

employeeSchema.plugin(uniqueValidator);

module.exports = models?.Employee || model("Employee", employeeSchema);