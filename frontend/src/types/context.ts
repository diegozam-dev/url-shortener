import { UrlRecord } from './url';

export type UrlHistoryContext = {
  urlHistory: UrlRecord[];
  setUrlHistory: React.Dispatch<React.SetStateAction<UrlRecord[]>>;
};
