import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/customError.error';
import ErrorCode from '../errors/errorCodes';

const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status: number;
  let response: string;
  let message: string;

  if (err.code === ErrorCode.InvalidUrl) {
    status = 400;
    response = err.code;
    message = err.message;
  } else if (err.code === ErrorCode.UrlNotExists) {
    status = 404;
    response = err.code;
    message = err.message;
  } else if (err.code === ('TooManyRequestsError' as ErrorCode)) {
    status = 429;
    response = ErrorCode.TooManyRequests;
    message = 'Too many requests.';
  } else if (err.code === ('AuthenticationRequiredError' as ErrorCode)) {
    status = 401;
    response = ErrorCode.AuthRequired;
    message = 'Verify that you have provided your API key.';
  } else if (err.code === ('WrongCredentialsError' as ErrorCode)) {
    status = 401;
    response = ErrorCode.WrongCredentialsError;
    message = 'The provided API key is incorrect.';
  } else {
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
