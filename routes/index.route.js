import express from 'express';
import connections from './connections.route';
import sprocs from './sprocs.route';

const router = express.Router();

router.use('/repository', connections);

router.use('/sproc', sprocs);

export default router;

