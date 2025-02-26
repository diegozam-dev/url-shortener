import { ShortenedUrl } from './url';

export type UrlHistoryContextType = {
  urlHistory: ShortenedUrl[];
  setUrlHistory: React.Dispatch<React.SetStateAction<ShortenedUrl[]>>;
};
