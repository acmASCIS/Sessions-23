import { Schema, model } from "mongoose"

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: Number,
});

export const User = model("User", schema);
