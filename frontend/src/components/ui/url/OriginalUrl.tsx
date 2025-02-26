import { UrlProps } from '../../../types/component';

const OriginalUrl = ({ url }: UrlProps) => {
  return <p className="text-base text-(--text-primary) line-clamp-1">{url}</p>;
};

export default OriginalUrl;
