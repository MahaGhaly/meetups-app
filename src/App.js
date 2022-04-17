// import React from 'react';
import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
// import MainNavigation from './components/layout/MainNavigation';
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
