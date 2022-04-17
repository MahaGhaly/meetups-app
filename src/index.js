import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';

import './index.css';
import App from './App';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>, 
  document.getElementById('root')
);

//>>>>>>new method with React 18 instead of React Dopm<<<<<<<
// import { createRoot } from 'react-dom/client';
// import './index.css'/
// const root = createRoot(document.getElementById('root'));
// root.render(<App tab="home" />);
