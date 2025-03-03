enum ErrorCode {
  MaliciousUrl = 'ERR_MALICIOUS_URL',
  NotFound = 'ERR_NOT_FOUND',
  InvalidUrl = 'ERR_INVALID_URL',
  UrlNotExists = 'ERR_URL_NOT_EXISTS',
  TooManyRequests = 'ERR_TOO_MANY_REQUESTS',
  AuthRequired = 'ERR_AUTH_REQUIRED',
  WrongCredentialsError = 'ERR_WRONG_CREDENTIALS',
  ErrorNetwork = 'ERR_NETWORK',
  UnknownError = 'ERR_UNKNOWN_ERROR'
}

export default ErrorCode;
