import { UrlProps } from '../../../types/component';

const ShortUrl = ({ url }: UrlProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-base line-clamp-1 text-(--short-url-text) font-semibold cursor-pointer transition-all hover:text-(--short-url-text-hover)"
    >
      {url}
    </a>
  );
};

export default ShortUrl;
