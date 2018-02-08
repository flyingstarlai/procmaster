import express from 'express';
import connectionController from '../controllers/connections.controller';

const router = express.Router();

router.get('/connections', (req, res) => {
  connectionController.getAll(req, res);
});

router.get('/connection/:name', (req, res) => {
  connectionController.getConnection(req, res);
});


router.post('/connections', (req, res) => {
  connectionController.addConnection(req, res);
});

router.delete('/connections', (req, res) => {
  connectionController.deleteConnection(req, res);
});

router.post('/connections/proc/:name', (req, res) => {
  connectionController.addProcedureToConnection(req, res);
});

router.delete('/connections/proc/:name', (req, res) => {
  connectionController.deleteProcedureFromConnection(req, res);
});

router.put('/connections/proc/:name', (req, res) => {
  connectionController.updateProcedureFromConnection(req, res);
});
export default router;
