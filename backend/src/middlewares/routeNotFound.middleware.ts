import { Request, Response } from 'express';
import ErrorCode from '../errors/errorCodes';

const routeNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    response: ErrorCode.NotFound,
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
};

export default routeNotFound;
