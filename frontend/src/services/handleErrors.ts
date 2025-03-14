import { toast } from 'sonner';
import CustomError from '../models/CustomError';
import { ErrorCode } from '../types/index';

export const handleErrors = (err: CustomError) => {
  let errorMessage: string;

  if (err.code === ErrorCode.InvalidUrl) {
    errorMessage = 'The url is invalid, check the url and try again.';
  } else if (err.code === ErrorCode.MaliciousUrl) {
    errorMessage =
      'The url entered could be malicious, check the url and try again.';
  } else if (err.code === ErrorCode.TooManyRequests) {
    errorMessage = 'You have exceeded the limit of 100 requests per day.';
  } else if (err.code === ErrorCode.UrlNotExists) {
    errorMessage = 'The entered url does not exist.';
  } else if (err.code === ErrorCode.NotFound) {
    errorMessage =
      'It is not possible to connect to the server. Please try again later.';
  } else if (err.code === ErrorCode.ErrorNetwork) {
    errorMessage =
      'Connection error. Check your internet connection and try again.';
  } else {
    errorMessage = 'Something happened! The operation could not be completed.';
  }

  toast.error(errorMessage);
};
