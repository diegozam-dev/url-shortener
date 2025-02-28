import { ShortenedUrl } from './url';

export type UrlShortenerResponse = {
  response: string;
  message: string;
  data?: ShortenedUrl;
};
