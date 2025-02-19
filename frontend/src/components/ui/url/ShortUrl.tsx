import { UrlProps } from '../../../types';

const ShortUrl = ({ url }: UrlProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-base text-(--short-url-text) font-semibold cursor-pointer transition-all hover:text-(--short-url-text-hover)"
    >
      {url}
    </a>
  );
};

export default ShortUrl;
