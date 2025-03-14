import shortlyLogo from '../../assets/shortly-logo.svg';
import { useEffect, useState } from 'react';
import UrlShortener from '../../features/UrlShortener/UrlShortener';
import waves from '../../assets/waves.png';
import ShortenedUrlHistory from '../../features/shortenedUrlHistory/ShortenedUrlHistory';
import Footer from './Footer';
import { UrlHistoryContext } from '../../contexts/contexts';
import { UrlRecord } from '../../types/index';
import { getUrlHistory } from '../../utils/index';
import { Toaster } from 'sonner';

const HomeLayout = () => {
  const [urlHistory, setUrlHistory] = useState<UrlRecord[]>([]);

  useEffect(() => {
    setUrlHistory(getUrlHistory());
  }, []);

  return (
    <UrlHistoryContext.Provider value={{ urlHistory, setUrlHistory }}>
      <Toaster position="top-center" richColors closeButton />

      <div>
        <main className="mx-auto px-6 max-w-[1032px] overflow-visible">
          <a href="/" className="my-10 mx-auto w-fit flex z-50">
            <img src={shortlyLogo} alt="Shortly logo" className="w-40" />
          </a>
          <section
            id="shorten-url"
            className="py-10 h-[532px] z-50 min-[370px]:h-[456px]"
          >
            <UrlShortener />
          </section>
          <div className="absolute left-0 top-[600px] min-[370px]:top-[520px] sm:top-[450px] w-full h-80 overflow-hidden flex justify-center -z-10">
            <div className="w-full h-full">
              <img
                src={waves}
                alt="Waves"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <section
            id="shortened-url-history"
            className="pt-24 pb-10 z-50 min-[370px]:pt-24 sm:pt-8"
          >
            <ShortenedUrlHistory />
          </section>
          <section id="about" className="py-16 z-50 flex flex-col items-center">
            <h2 className="text-(--heading-primary) text-center mb-6">
              About Shortly
            </h2>
            <p className="text-(--text-primary) text-xl text-center max-w-[500px]">
              <strong>
                Shortly is a simple and efficient tool for shortening any link
                without losing its original functionality.
              </strong>{' '}
              With just one click, it transforms long URLs into compact,
              shareable versions. Simply paste your link into the field, click
              "Shorten", and instantly get a short link ready to share with your
              friends.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </UrlHistoryContext.Provider>
  );
};

export default HomeLayout;
