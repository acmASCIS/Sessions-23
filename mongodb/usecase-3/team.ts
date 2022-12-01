import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Team = model("Team", schema);
