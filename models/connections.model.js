import mongoose from 'mongoose';
import ProcedureSchema from './procedures.model';

const ConnectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profile: { type: String },
  host: { type: String },
  user: { type: String },
  password: { type: String },
  procedures: [ProcedureSchema],
});

const ConnectionModel = mongoose.model('Connection', ConnectionSchema);

ConnectionModel.getAll = () => {
  return ConnectionModel.find({});
};

ConnectionModel.getConnection = (name) => {
  return ConnectionModel.findOne({ name });
};

ConnectionModel.addConnection = (connectionToAdd) => {
  return connectionToAdd.save();
};

ConnectionModel.removeConnection = (name) => {
  return ConnectionModel.remove({ name });
};

ConnectionModel.addProcedureToConnection = (name, update) => {
  return ConnectionModel.findOneAndUpdate(
    { name },
    { $push: { procedures: update } },
    { new: true }
  );
};

ConnectionModel.deleteProcedureFromConnection = (name, update) => {
  return ConnectionModel.findOneAndUpdate(
    { name },
    { $pull: { procedures: update } },
    { new: true }
  );
};

ConnectionModel.updateProcedureFromConnection = (name, update) => {
  return ConnectionModel.findOneAndUpdate(
    { name, 'parameters.spId': update.spId },
    { $set: { 'parameters.$': update } },
    { new: true }
  );
};

ConnectionModel.getConnectionByProcedure = (spId) => {
  return ConnectionModel.findOne(
    { 'procedures.spId': spId },
    { profile: 1, host: 1, database: 1, user: 1, password: 1, 'procedures.$': 1 }
  );
};
export default ConnectionModel;
