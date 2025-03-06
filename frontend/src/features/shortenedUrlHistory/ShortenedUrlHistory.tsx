import { useContext } from 'react';
import {
  IconButton,
  Separator,
  OriginalUrl,
  ShortUrl
} from '../../components/index';
import copyTextToClipboard from '../../utils/copyTextToClipboard';
import { UrlHistoryContext } from '../../contexts/contexts';

const ShortenedUrlHistory = () => {
  const historyContext = useContext(UrlHistoryContext);

  return (
    <>
      <h2 className="text-(--heading-contrast) text-center mb-6">History</h2>
      <div className="p-6 min-h-36 max-h-[400px] bg-(--surface-primary) rounded-lg shadow-(--shadow-md) overflow-y-auto scrollbar">
        {historyContext && historyContext?.urlHistory.length > 0 ? (
          <ul>
            {historyContext?.urlHistory?.map((shortenedUrl, index) => {
              return (
                <li key={index}>
                  <div className="py-4 grid grid-cols-1 items-center gap-4 md:max-[850px]:grid-cols-[1fr_40%_40px] md:min-[850px]:grid-cols-[1fr_30%_40px]">
                    <OriginalUrl url={shortenedUrl.originalUrl} />
                    <ShortUrl url={shortenedUrl.shortUrl} />
                    <IconButton
                      action={() => copyTextToClipboard(shortenedUrl.shortUrl)}
                      title="Copy"
                    >
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
                  <Separator />
                </li>
              );
            })}
          </ul>
        ) : (
          <span className="text-base text-(--text-primary)">
            You have not shortened any url yet
          </span>
        )}
      </div>
    </>
  );
};

// Editar barras de scroll y rounded del contenedor del history

export default ShortenedUrlHistory;
