import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stocks: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Stock",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export const User = model("User", schema);
