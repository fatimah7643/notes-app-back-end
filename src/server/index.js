import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import router from '../routes/index.js';
import ErrorHandler from '../middleware/error.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(ErrorHandler);

export default app;