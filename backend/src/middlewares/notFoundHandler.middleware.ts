import { Request, Response } from 'express';
import { NOT_FOUND_PAGE_URL } from '../config';

const notFoundHandler = (_req: Request, res: Response) => {
  res.redirect(301, NOT_FOUND_PAGE_URL as string);
};

export default notFoundHandler;
