import { NextFunction, Request, Response } from 'express';
import { cache } from '../utils';

const cacheHandler = (req: Request, res: Response, next: NextFunction) => {
  const key = `shortly:${req.body.url}`;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    res.status(200).json(cachedResponse);
  } else {
    next();
  }
};

export default cacheHandler;
