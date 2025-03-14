import { UrlRecord } from './url';

export type UrlShortenerResponse = {
  response: string;
  message: string;
  data?: UrlRecord;
};
