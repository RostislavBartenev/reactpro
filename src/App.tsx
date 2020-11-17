import React from 'react';

import { useRoutes } from 'hookrouter';
import routes from './routes';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
