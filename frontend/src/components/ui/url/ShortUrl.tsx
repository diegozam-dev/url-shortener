import { UrlProps } from '../../../types/index';

const ShortUrl = ({ url }: UrlProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-base whitespace-nowrap overflow-hidden text-ellipsis text-(--short-url-text) font-semibold cursor-pointer transition-all hover:text-(--short-url-text-hover)"
    >
      {url}
    </a>
  );
};

export default ShortUrl;
