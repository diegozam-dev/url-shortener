import { Router } from 'express';
import ShortUrlController from '../controllers/shortUrl.controller';
import scanUrl from '../middlewares/scanUrl.middleware';
import validateUrl from '../middlewares/validateUrl.middleware';
import rateLimiter from '../middlewares/rateLimiter.middleware';

const shortUrlController = new ShortUrlController();
const shortUrlRouter = Router();

shortUrlRouter.post(
  '/encode',
  rateLimiter,
  validateUrl,
  scanUrl,
  shortUrlController.createShortUrl
);
shortUrlRouter.get(
  '/redirect/:checkSumId',
  shortUrlController.redirectToOriginalUrl
);

export default shortUrlRouter;
