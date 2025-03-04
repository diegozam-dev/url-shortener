import express, { json } from 'express';
import router from './routes/index';
import { PORT } from './config';
import routeNotFound from './middlewares/routeNotFound.middleware';
import errorHandler from './middlewares/errorHandler.middleware';

const app = express();

// Config
app.use(json());
app.disable('x-powered-by');
app.set('trust proxy', 1);

// Routes
app.use(router);

// Middlewares
router.use(routeNotFound);
router.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
