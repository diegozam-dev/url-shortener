import shortlyLogo from '../../assets/shortly-logo.svg';

const NotFound = () => {
  return (
    <main className="px-6">
      <a href="/" className="my-10 mx-auto w-fit flex z-50">
        <img src={shortlyLogo} alt="Shortly logo" className="w-40" />
      </a>
      <div className="mt-40 flex flex-col justify-center items-center sm:flex-row">
        <span className="text-(--text-brand) text-6xl font-bold max-sm:border-b-4 max-sm:px-6 max-sm:pb-4 max-sm:mb-4 sm:border-r-4 sm:px-4 sm:mr-4">
          404
        </span>
        <span className="text-(--text-primary) text-2xl max-sm:text-center font-semibold max-sm:max-w-[500px]">
          Sorry, the page you are looking for was not found.
        </span>
      </div>
    </main>
  );
};

export default NotFound;
