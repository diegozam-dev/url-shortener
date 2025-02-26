import { ShortenedUrl } from './url';

export type ShortUrlResponse = {
  response: string;
  message: string;
  data: ShortenedUrl;
};
