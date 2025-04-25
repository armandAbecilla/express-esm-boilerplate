import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/config.js';

import testRouter from './routes/test_router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const API_PATH = '/api';

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '/images')));

app.use('/test', testRouter);

app.listen(config.EnvSettings.Port, () => {
  console.log(`Express server running at port ${config.EnvSettings.Port}`);
});
