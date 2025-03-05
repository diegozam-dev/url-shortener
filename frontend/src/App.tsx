import { BrowserRouter, Routes, Route } from 'react-router';
import { NotFound } from './components/index';
import HomeLayout from './components/layouts/HomeLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
