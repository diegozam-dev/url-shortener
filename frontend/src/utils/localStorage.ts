import { ShortenedUrl } from '../types/url';

export const getUrlHistory = (): ShortenedUrl[] => {
  const urlHistory = localStorage.getItem('shortened_urls_history');

  return urlHistory ? JSON.parse(urlHistory) : [];
};

export const addToUrlHistory = (shortenedUrl: ShortenedUrl) => {
  const urlHistory = getUrlHistory();

  const shortUrlAlreadyExist = urlHistory.find(
    item => item.shortUrl === shortenedUrl.shortUrl
  );

  if (!shortUrlAlreadyExist) {
    urlHistory.push(shortenedUrl);
    localStorage.setItem('shortened_urls_history', JSON.stringify(urlHistory));
  }
};
