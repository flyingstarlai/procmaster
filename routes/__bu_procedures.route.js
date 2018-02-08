import express from 'express';
import procedureController from '../controllers/procedures.controller';

const router = express.Router();

router.get('/all', (req, res) => {
  procedureController.getAll(req, res);
});

router.get('/fetch/:spId', (req, res) => {
  procedureController.getProcedure(req, res);
});
router.post('/add', (req, res) => {
  procedureController.addProcedure(req, res);
});

router.delete('/delete', (req, res) => {
  procedureController.deleteProcedure(req, res);
});

export default router;
