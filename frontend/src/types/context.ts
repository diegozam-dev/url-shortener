import { UrlRecord } from './url';

export type UrlHistoryContextType = {
  urlHistory: UrlRecord[];
  setUrlHistory: React.Dispatch<React.SetStateAction<UrlRecord[]>>;
};
