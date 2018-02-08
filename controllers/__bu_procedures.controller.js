import procedures from '../models/procedures.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getAll = async (req, res) => {
  try {
    // res.send('hello');
    const allProcedures = await procedures.getAll();
    logger.info('sending all procedures...');
    res.send(allProcedures);
  } catch (error) {
    logger.error(error);
  }
};

controller.getProcedure = async(req, res) => {
  const { spId } = req.params;
  try {
    const selectedProc = await procedures.getProcedure(spId);
    res.send(selectedProc);
  } catch (error) {
    logger.error(error);
  }
};

controller.addProcedure = async (req, res) => {
  logger.info(req.body);
  const { spId, name, description, parameters } = req.body;
  const procedureToAdd = procedure({ spId, name, description, parameters });
  try {
    const savedProc = await procedures.addProcedure(procedureToAdd);
    res.send(savedProc);
  } catch (error) {
    logger.error(error);
  }
};

controller.deleteProcedure = async (req, res) => {
  const { spId } = req.body;
  try {
    const removedProc = await procedures.removeProcedure(spId);
    res.send('succesfully deleted');
  } catch (error) {
    logger.error(error);
  }
};

export default controller;
