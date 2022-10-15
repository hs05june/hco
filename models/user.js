import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

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
  shopIDs: {
    type: [Schema.Types.ObjectId],
    ref: "Shop",
    default: []
  }
});

userSchema.plugin(uniqueValidator);

export default models?.User || model("User", userSchema);