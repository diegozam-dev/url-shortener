import shortlyLogo from '../../assets/shortly-logo.svg';
import ShortenUrl from '../../features/shortenUrl/ShortenUrl';
import waves from '../../assets/waves.png';
import ShortenedUrlHistory from '../../features/shortenedUrlHistory/ShortenedUrlHistory';

const HomeLayout = () => {
  return (
    <main className="mx-auto px-6 max-w-[1032px] overflow-visible">
      <img
        src={shortlyLogo}
        alt="Shortly logo"
        className="my-10 mx-auto w-40 z-50"
      />
      <section id="shorten-url" className="my-10 min-h-96 z-50">
        <ShortenUrl />
      </section>
      <div className="absolute left-0 top-[550px] min-[370px]:top-[500px] sm:top-[450px] w-full h-80 overflow-hidden flex justify-center -z-10">
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
        className="pt-36 sm:pt-12 pb-10 z-50 min-[370px]:pt-24"
      >
        <ShortenedUrlHistory />
      </section>
    </main>
  );
};

export default HomeLayout;
