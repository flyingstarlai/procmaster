import mongoose from 'mongoose';

const ConnectionSchema = new mongoose.Schema({
  name: String,
  databaseProfile: String,
  host: String,
  user: String,
  password: String,
  database: String,
});

const ConnectionModel = mongose.model('Connection');
