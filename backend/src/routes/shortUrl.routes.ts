import { Router } from 'express';
import cors from 'cors';
import ShortUrlController from '../controllers/shortUrl.controller';
import scanUrl from '../middlewares/scanUrl.middleware';
import validateUrl from '../middlewares/validateUrl.middleware';
import rateLimiter from '../middlewares/rateLimiter.middleware';

const shortUrlController = new ShortUrlController();
const shortUrlRouter = Router();

const corsOptions = {
  origin: [
    'https://url-shortener-pearl-eta.vercel.app/',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

shortUrlRouter.post(
  '/encode',
  cors(corsOptions),
  rateLimiter,
  validateUrl,
  scanUrl,
  shortUrlController.createShortUrl
);
shortUrlRouter.get(
  '/redirect/:shortCode',
  shortUrlController.redirectToOriginalUrl
);

export default shortUrlRouter;
