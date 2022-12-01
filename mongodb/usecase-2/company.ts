import { Schema, model } from 'mongoose';
import { employeeSchema } from './employee';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  value: Number,
  employees: [employeeSchema],
});

// schema.index({ 'employees.email': 1, name: 1 }, { unique: true });
// schema.index({ name: 1 }, { unique: true });
// schema.index({ 'employees.age': 1 });
// schema.index({ 'employees.email': 1 });

export const Company = model("Company", schema);
