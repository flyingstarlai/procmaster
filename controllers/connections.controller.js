import connection from '../models/connections.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const connections = await connection.getAll();
    res.send(connections);
  } catch (error) {
    logger.error(error);
  }
};

controller.getConnection = async (req, res) => {
  try {
    const getConnection = await connection.getConnection(req.params.name);
    res.send(getConnection);
  } catch (error) {
    logger.error(error);
  }
};

controller.addConnection = async (req, res) => {
  try {
    const connectionToAdd = connection(req.body);
    const addConnection = await connection.addConnection(connectionToAdd);
    res.send(addConnection);
  } catch (error) {
    logger.error(error);
  }
};

controller.deleteConnection = async (req, res) => {
  try {
    const deleteConnection = connection.removeConnection(req.params.name);
    res.send('deleted');
  } catch (error) {
    logger.error(error);
  }
};

controller.addProcedureToConnection = async (req, res) => {
  try {
    const addedProcedure = await connection.addProcedureToConnection(req.params.name, req.body);
    res.send(addedProcedure);
  } catch (error) {
    logger.error(error);
  }
};

controller.deleteProcedureFromConnection = async (req, res) => {
  try {
    const deletedProcedure = await connection
      .deleteProcedureFromConnection(req.params.name, req.body);
    res.send(deletedProcedure);
  } catch (error) {
    logger.error(error);
  }
};

controller.updateProcedureFromConnection = async (req, res) => {
  try {
    const updatedProcedure = await connection
      .updateProcedureFromConnection(req.params.name, req.body);
    res.send(updatedProcedure);
  } catch (error) {
    logger.error(error);
  }
};
export default controller;
