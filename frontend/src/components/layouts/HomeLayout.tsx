import shortlyLogo from '../../assets/shortly-logo.svg';
import ShortenUrl from '../../features/shortenUrl/ShortenUrl';

const HomeLayout = () => {
  return (
    <div className="mx-auto px-6 max-w-[1032px]">
      <img
        src={shortlyLogo}
        alt="Shortly logo"
        className="my-10 mx-auto w-40"
      />
      <section id="shorten-url" className="my-10">
        <h1 className="text-(--heading-primary) text-center mb-6">
          Shorten Url
        </h1>
        <ShortenUrl />
      </section>
    </div>
  );
};

export default HomeLayout;
