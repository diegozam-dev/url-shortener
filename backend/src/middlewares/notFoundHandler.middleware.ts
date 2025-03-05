import { Request, Response } from 'express';

const routeNotFound = (_req: Request, res: Response) => {
  res.redirect(301, 'https://url-shortener-pearl-eta.vercel.app/not-found');
};

export default routeNotFound;
