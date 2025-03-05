import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/customError.error';
import { ErrorCode } from '../types/error';

const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  // Si no existe una url lo pasa al notFoundHandler
  if (err.code === ErrorCode.UrlNotExists) {
    return next();
  }

  let status: number;
  let response: string;
  let message: string;

  switch (err.code) {
    case ErrorCode.InvalidUrl:
      status = 400;
      response = err.code;
      message = err.message;
      break;
    case ErrorCode.TooManyRequests:
      status = 429;
      response = ErrorCode.TooManyRequests;
      message = 'Too many requests.';
      break;
    case ErrorCode.AuthRequired:
      status = 401;
      response = ErrorCode.AuthRequired;
      message = 'Verify that you have provided your API key.';
      break;
    case ErrorCode.WrongCredentialsError:
      status = 401;
      response = ErrorCode.WrongCredentialsError;
      message = 'The provided API key is incorrect.';
      break;
    default:
      status = 500;
      response = ErrorCode.UnknownError;
      message = 'Server error.';
  }

  res.status(status).json({
    response,
    message
  });
};

export default errorHandler;
