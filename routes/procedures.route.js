import express from 'express';
import procedureController from '../controllers/procedures.controller';

const router = express.Router();

router.get('/allprocedures', (req, res) => {
  procedureController.getAll(req, res);
});

router.get('/procedure/:spId', (req, res) => {
  procedureController.getProcedure(req, res);
});
router.post('/addprocedure', (req, res) => {
  procedureController.addProcedure(req, res);
});

router.delete('/deleteprocedure', (req, res) => {
  procedureController.deleteProcedure(req, res);
});

export default router;
