import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as HashRouter, Switch, Route, Link } from 'react-router-dom';
import './scss/main.scss';
import store from './store';
import logo from './assets/img/logo.png';
import Contratos from './pages/Contratos';
import Contrato from './pages/Contrato';
import CriarContrato from './pages/CriarContrato';

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <header className="header">
          <div className="container">
            <Link to="/">
              <img src={logo} className="" alt="logo" width="175" height="auto" />
            </Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Contratos />
          </Route>
          <Route path="/contrato/:id">
            <Contrato />
          </Route>
          <Route path="/criar">
            <CriarContrato />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
