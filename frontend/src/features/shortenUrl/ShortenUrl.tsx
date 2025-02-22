import { ChangeEvent, MouseEvent, useState } from 'react';
import IconButton from '../../components/ui/button/IconButton';
import PrimaryButton from '../../components/ui/button/PrimaryButton';
import ShortUrl from '../../components/ui/url/ShortUrl';
import urlRegex from '../../utils/urlRegex';
import { ButtonState } from '../../utils/buttonConfig';
import Spinner from '../../components/ui/spinner/Spinner';
import copyTextToClipboard from '../../utils/copyTextToClipboard';

const ShortenUrl = () => {
  const [isUrlValid, setIsUrlValid] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [shorteningUrl, setShorteningUrl] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setUrlInput(inputValue);

    const regexResult = urlRegex.test(inputValue);
    if (isUrlValid !== regexResult) setIsUrlValid(regexResult);
  };

  const handleShortenUrl = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isUrlValid) {
      setShorteningUrl(true);

      setTimeout(() => {
        setShortUrl('http://shortly/3rff3');
        setShorteningUrl(false);
        setUrlInput('');
        setIsUrlValid(false);
      }, 5000); // Aquí irá la llamada a la api
    } else {
      alert('Invalid url');
    }
  };

  return (
    <div>
      <form className="w-full flex flex-col gap-3 sm:flex-row">
        <div className="w-full">
          <input
            onChange={handleInputChange}
            type="email"
            value={urlInput}
            placeholder="Enter url"
            className={`text-lg text-(--input-text) mb-1 px-4 h-12 w-full bg-(--surface-primary) rounded-lg placeholder:text-(--input-placeholder) outline-0 ${
              urlInput.length > 0 && !isUrlValid
                ? 'border border-(--input-border-invalid) focus:border-(--input-border-invalid) focus:shadow-(--input-shadow-invalid)'
                : 'border border-(--input-border) focus:border-(--input-border-focus) focus:shadow-(--input-shadow-focus)'
            }`}
          />
          {urlInput.length > 0 && !isUrlValid && (
            <span className="text-(--text-error) text-sm ml-4">
              The url is invalid.
            </span>
          )}
        </div>
        <PrimaryButton
          action={handleShortenUrl}
          state={shorteningUrl ? ButtonState.Loading : ButtonState.Default}
        >
          {shorteningUrl ? <Spinner /> : 'Shorten'}
        </PrimaryButton>
      </form>
      {shortUrl && (
        <div className="mt-6 p-6 w-full border-2 border-dashed border-(--border-primary) rounded-lg flex justify-center items-center gap-3">
          <ShortUrl url={shortUrl} />
          <IconButton action={() => copyTextToClipboard(shortUrl)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_25)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 2.5C5 1.83696 5.26339 1.20107 5.73223 0.732233C6.20107 0.263392 6.83696 0 7.5 0L17.5 0C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5V12.5C20 13.163 19.7366 13.7989 19.2678 14.2678C18.7989 14.7366 18.163 15 17.5 15H7.5C6.83696 15 6.20107 14.7366 5.73223 14.2678C5.26339 13.7989 5 13.163 5 12.5V2.5ZM7.5 1.25C7.16848 1.25 6.85054 1.3817 6.61612 1.61612C6.3817 1.85054 6.25 2.16848 6.25 2.5V12.5C6.25 12.8315 6.3817 13.1495 6.61612 13.3839C6.85054 13.6183 7.16848 13.75 7.5 13.75H17.5C17.8315 13.75 18.1495 13.6183 18.3839 13.3839C18.6183 13.1495 18.75 12.8315 18.75 12.5V2.5C18.75 2.16848 18.6183 1.85054 18.3839 1.61612C18.1495 1.3817 17.8315 1.25 17.5 1.25H7.5ZM2.5 6.25C2.16848 6.25 1.85054 6.3817 1.61612 6.61612C1.3817 6.85054 1.25 7.16848 1.25 7.5V17.5C1.25 17.8315 1.3817 18.1495 1.61612 18.3839C1.85054 18.6183 2.16848 18.75 2.5 18.75H12.5C12.8315 18.75 13.1495 18.6183 13.3839 18.3839C13.6183 18.1495 13.75 17.8315 13.75 17.5V16.25H15V17.5C15 18.163 14.7366 18.7989 14.2678 19.2678C13.7989 19.7366 13.163 20 12.5 20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V7.5C0 6.83696 0.263392 6.20107 0.732233 5.73223C1.20107 5.26339 1.83696 5 2.5 5H3.75V6.25H2.5Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_25">
                  <rect width="20" height="20" fill="none" />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
        </div>
      )}
    </div>
  );
};

// Agregar animación a la url acortada y refactorizar

export default ShortenUrl;
