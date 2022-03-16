import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import Home from 'Containers/Home';
import SignIn from 'Containers/SignIn';
import NotFound from 'Containers/NotFound';

import './index.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.home} element={<Home />} />
        <Route exact path={ROUTES.signIn} element={<SignIn />} />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
}
export default App;
