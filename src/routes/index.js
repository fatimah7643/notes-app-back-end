import { Router } from 'express';
import noteRouter from '../services/notes/routes/index.js';
import users from '../services/users/routes/index.js';
import authentications from '../services/authentications/routes/index.js';
import collaborations from '../services/collaborations/routes/index.js';

const router = Router();

router.use('/', noteRouter);
router.use('/', users);
router.use('/', authentications);
router.use('/', collaborations);

export default router;