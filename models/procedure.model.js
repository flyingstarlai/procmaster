import mongoose from 'mongoose';
import ParameterSchema from './parameter.model';

const ProcedureSchema = new mongoose.Schema({
  spId: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  description: { type: String },
  parameters: [ParameterSchema],
  lastModified: { type: Date, default: Date.now() },
});

const ProcedureModel = mongoose.model('Procedure', ProcedureSchema);

ProcedureModel.getAll = () => {
  return ProcedureModel.find({});
};

ProcedureModel.getProcedure = (spId) => {
  return ProcedureModel.findOne({ spId });
};
ProcedureModel.addProcedure = (procedureToAdd) => {
  return procedureToAdd.save();
};

ProcedureModel.removeProcedure = (spId) => {
  return ProcedureModel.remove({ spId });
};
export default ProcedureModel;
