import { UrlProps } from '../../../types';

const OriginalUrl = ({ url }: UrlProps) => {
  return <p className="text-base text-(--text-primary)">{url}</p>;
};

export default OriginalUrl;
