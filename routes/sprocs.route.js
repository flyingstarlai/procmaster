import { Router } from 'express';
import sprocsController from '../controllers/sprocs.controller';

const router = Router();

router.post('/:spId', (req, res) => {
  sprocsController.execProc(req, res);
});

export default router;
