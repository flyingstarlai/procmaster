import { Schema } from 'mongoose';

const ParameterSchema = new Schema({
  seq: { type: Number, required: true },
  name: { type: String, required: true },
  value: String,
});

export default ParameterSchema;

