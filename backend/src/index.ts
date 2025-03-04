import express, { json } from 'express';
import cors from 'cors';
import router from './routes/index';
import { PORT } from './config';
import routeNotFound from './middlewares/routeNotFound.middleware';
import errorHandler from './middlewares/errorHandler.middleware';

const app = express();

const corsOptions = {
  origin: 'https://url-shortener-pearl-eta.vercel.app/',
  methods: 'GET,POST'
};

// Config
app.use(json());
app.use(cors(corsOptions));
app.disable('x-powered-by');

// Routes
app.use(router);

// Middlewares
router.use(routeNotFound);
router.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
