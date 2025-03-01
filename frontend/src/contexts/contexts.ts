import { createContext } from 'react';
import { UrlHistoryContextType } from '../types/index';

export const UrlHistoryContext = createContext<UrlHistoryContextType | null>(
  null
);
