import shortlyLogo from './assets/shortly-logo.svg';
import ShortUrl from './components/ui/url/ShortUrl';
// import PrimaryButton from './components/ui/button/PrimaryButton';
// import IconButton from './components/ui/button/IconButton';

const App = () => {
  return (
    <>
      <img src={shortlyLogo} alt="Shortly logo" />
      <ShortUrl url="https://www.youtube.com/" />
    </>
  );
};

export default App;
