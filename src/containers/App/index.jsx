import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import Timer from 'Containers/Timer';
import Reports from 'Containers/Reports';
import SignIn from 'Containers/SignIn';
import NotFound from 'Containers/NotFound';

import './index.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.timer} element={<Timer />} />
        <Route exact path={ROUTES.report} element={<Reports />} />
        <Route exact path={ROUTES.signIn} element={<SignIn />} />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
}
export default App;
