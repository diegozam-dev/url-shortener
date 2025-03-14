// ShortenUrl
export type UrlShortenerState = {
  urlInput: string;
  isUrlValid: boolean;
  currentShortUrl: string | null;
  isShortening: boolean;
};

export enum UrlShortenerReducerActionList {
  SetUrlImput = 'SET_URL_INPUT',
  SetIsUrlValid = 'SET_IS_URL_VALID',
  SetCurrentShortUrl = 'SET_CURRENT_SHORT_URL',
  SetIsShortening = 'SET_IS_SHORTENING',
  Reset = 'RESET'
}

export type UrlShortenerReducerAction = {
  type: UrlShortenerReducerActionList;
  payload: string | boolean | null;
};
