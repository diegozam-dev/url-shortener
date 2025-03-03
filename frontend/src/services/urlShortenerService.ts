import axios, { AxiosResponse } from 'axios';

export const createShortUrl = async (url: string) => {
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
};
