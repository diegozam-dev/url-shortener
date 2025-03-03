import { rateLimit } from 'express-rate-limit';
import ErrorCode from '../errors/errorCodes';

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: {
    response: ErrorCode.TooManyRequests,
    message: 'You have exceeded your 100 requests per day limit.'
  },
  headers: true
});

export default rateLimiter;
