import { Router } from 'express';
import execProc from '../controllers/procs.controller';

export default({ conn }) => {
  const router = Router();
  router.use('/:spId', execProc({ conn }));
  return router;
};
