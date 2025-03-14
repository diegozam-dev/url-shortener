import { createContext } from 'react';
import { UrlHistoryContext } from '../types/index';

export const HistoryContext = createContext<UrlHistoryContext | null>(null);
