import { UrlRecord } from '../types/index';

export const getUrlHistory = (): UrlRecord[] => {
  const urlHistory = localStorage.getItem('shortened_urls_history');

  return urlHistory ? JSON.parse(urlHistory) : [];
};

export const addToUrlHistory = (shortenedUrl: UrlRecord) => {
  const urlHistory = getUrlHistory();

  const shortUrlAlreadyExist = urlHistory.find(
    item => item.shortUrl === shortenedUrl.shortUrl
  );

  if (!shortUrlAlreadyExist) {
    urlHistory.push(shortenedUrl);
    localStorage.setItem('shortened_urls_history', JSON.stringify(urlHistory));
  }
};
