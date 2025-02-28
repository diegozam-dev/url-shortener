import { rateLimit } from 'express-rate-limit';
import ErrorEnum from '../errors/errorEnum';

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: {
    response: ErrorEnum.TooManyRequests,
    message: 'You have exceeded your 10 requests per day limit.'
  },
  headers: true
});

export default rateLimiter;
