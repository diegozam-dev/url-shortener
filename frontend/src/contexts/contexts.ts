import { createContext } from 'react';
import { UrlHistoryContextType } from '../types/context';

export const UrlHistoryContext = createContext<UrlHistoryContextType | null>(
  null
);
