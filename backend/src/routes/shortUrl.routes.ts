import { Router } from 'express';
import ShortUrlController from '../controllers/shortUrl.controller';
import urlScanner from '../middlewares/urlScanner.middleware';
import urlValidator from '../middlewares/urlValidator.middleware';
import rateLimiter from '../middlewares/rateLimiter.middleware';
import cacheHandler from '../middlewares/cacheHandler.middleware';

const shortUrlController = new ShortUrlController();
const shortUrlRouter = Router();

shortUrlRouter.post(
  '/encode',
  rateLimiter,
  urlValidator,
  urlScanner,
  cacheHandler,
  shortUrlController.createShortUrl
);
shortUrlRouter.get(
  '/redirect/:shortCode',
  shortUrlController.redirectToOriginalUrl
);

export default shortUrlRouter;
