import { Router } from 'express';
import ShortUrlController from '../controllers/shortUrl.controller';
import scanUrl from '../middlewares/scanUrl.middleware';
import validateUrl from '../middlewares/validateUrl.middleware';
import rateLimiter from '../middlewares/rateLimiter.middleware';
// import cache from '../utils/cacheConfig';

const shortUrlController = new ShortUrlController();
const shortUrlRouter = Router();

// Middlewares
// shortUrlRouter.use(cache());

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
