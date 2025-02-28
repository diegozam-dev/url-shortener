import { UrlProps } from '../../../types/component';

const OriginalUrl = ({ url }: UrlProps) => {
  return (
    <p className="text-base text-(--text-primary) whitespace-nowrap overflow-hidden text-ellipsis">
      {url}
    </p>
  );
};

export default OriginalUrl;
