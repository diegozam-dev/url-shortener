import shortlyLogo from '../../assets/shortly-logo.svg';
import ShortenUrl from '../../features/shortenUrl/ShortenUrl';
import waves from '../../assets/waves.png';

const HomeLayout = () => {
  return (
    <div className="mx-auto px-6 max-w-[1032px] overflow-visible">
      <img
        src={shortlyLogo}
        alt="Shortly logo"
        className="my-10 mx-auto w-40 z-50"
      />
      <section id="shorten-url" className="my-10 min-h-96 z-50">
        <h1 className="text-(--heading-primary) text-center mb-6">
          Shorten Url
        </h1>
        <ShortenUrl />
      </section>
      <div className="absolute left-0 top-[550px] min-[370px]:top-[500px] sm:top-[450px] w-full h-80 overflow-hidden flex justify-center">
        <div className="w-full h-full">
          <img
            src={waves}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
