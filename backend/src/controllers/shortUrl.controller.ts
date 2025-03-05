import { NextFunction, Request, Response } from 'express';
import { cache } from '../utils';
import ShortUrlService from '../services/shortUrl.service';
import { BASE_URL } from '../config';

class ShortUrlController {
  private shortUrlService: ShortUrlService;

  constructor() {
    this.shortUrlService = new ShortUrlService();
  }

  public createShortUrl = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { url } = req.body;

    try {
      const { short_code, original_url } =
        await this.shortUrlService.createShortUrl(url);

      const responseData = {
        response: 'OK',
        message: 'Url shorted correct.',
        data: {
          shortUrl: `${BASE_URL}/${short_code}`,
          originalUrl: original_url
        }
      };

      // Guardamos la respuesta en cache
      cache.set(`shortly:${url}`, responseData);

      res.status(200).json(responseData);
    } catch (error) {
      next(error);
    }
  };

  public redirectToOriginalUrl = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { shortCode } = req.params;

    try {
      const originalUrl = await this.shortUrlService.getOriginalUrl(shortCode);

      res.redirect(301, originalUrl as string);
    } catch (error) {
      next(error);
    }
  };
}

export default ShortUrlController;
