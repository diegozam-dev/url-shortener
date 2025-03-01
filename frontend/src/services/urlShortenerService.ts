import axios, { AxiosResponse } from 'axios';
import { handleErrors } from './handleErrors';
import CustomError from '../models/CustomError';
import { ErrorCode } from '../types/index';

export const createShortUrl = async (url: string) => {
  try {
    const { data }: AxiosResponse = await axios.post(
      import.meta.env.VITE_ENCODE_URL_API,
      {
        url
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.data?.response as ErrorCode;
      handleErrors(new CustomError(errorCode || ErrorCode.UnknownError));
    } else {
      handleErrors(new CustomError(ErrorCode.UnknownError));
    }
  }
};
