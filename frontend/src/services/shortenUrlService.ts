import axios, { AxiosResponse } from 'axios';

export const createShortUrl = async (url: string) => {
  try {
    const { data }: AxiosResponse = await axios.post(
      'http://localhost:3000/v1/api/url/encode',
      {
        url: url
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
