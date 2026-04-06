import { Router } from 'express';
import noteRouter from '../services/notes/routes/index.js';

const router = Router();

router.use('/', noteRouter);

export default router;