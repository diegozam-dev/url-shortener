import { ErrorCode } from '../types/index';

class CustomError extends Error {
  private readonly _code: ErrorCode;

  constructor(code: ErrorCode, message?: string) {
    super(message);
    this._code = code;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  get code(): string {
    return this._code;
  }
}

export default CustomError;
