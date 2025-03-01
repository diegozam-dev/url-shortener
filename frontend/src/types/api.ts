import { ShortenedUrlType } from './url';

export type UrlShortenerResponse = {
  response: string;
  message: string;
  data?: ShortenedUrlType;
};
