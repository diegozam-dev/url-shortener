import { ShortenedUrlType } from './url';

export type UrlHistoryContextType = {
  urlHistory: ShortenedUrlType[];
  setUrlHistory: React.Dispatch<React.SetStateAction<ShortenedUrlType[]>>;
};
