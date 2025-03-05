import { Request, Response } from 'express';
// import { NOT_FOUND_PAGE_URL } from '../config';
import { ErrorCode } from '../types/error';

const notFoundHandler = (_req: Request, res: Response) => {
  // res.redirect(301, NOT_FOUND_PAGE_URL as string);
  res.status(404).json({ response: ErrorCode.NotFound, message: 'Not found.' });
};

export default notFoundHandler;
