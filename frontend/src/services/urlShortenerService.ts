import axios, { AxiosError, AxiosResponse } from 'axios';
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
  } catch (error) {
    if (error instanceof AxiosError) {
      handleErrors(new CustomError(error.code as ErrorCode));
    }
  }
};
