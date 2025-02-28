import HomeLayout from './components/layouts/HomeLayout';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <HomeLayout></HomeLayout>
    </>
  );
};

export default App;
