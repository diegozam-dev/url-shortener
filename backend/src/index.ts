import express, { json } from 'express';
import router from './routes/index';
import cors from 'cors';
import { PORT } from './config';
import notFoundHandler from './middlewares/notFoundHandler.middleware';
import errorHandler from './middlewares/errorHandler.middleware';

const app = express();

const corsOptions = {
  origin: [
    'https://url-shortener-pearl-eta.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

// Config
app.use(json());
app.use(cors(corsOptions));
app.disable('x-powered-by');
app.set('trust proxy', 1);

// Routes
app.use(router);

// Middlewares
router.use(errorHandler);
router.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
