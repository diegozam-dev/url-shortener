import { ErrorCode } from '../types/error';

class CustomError extends Error {
  readonly code: ErrorCode;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.code = code;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
