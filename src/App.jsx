import react, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.module.scss';
import { Navigation } from './Components/Navigation/Navigation';
import { FrontPage } from './Sites/FrontPage/FrontPage';
import { ProductPage } from './Sites/ProductPage/ProductPage';
import { ContactPage } from './Sites/ContactPage/ContactPage';
import { LoginPage } from './Sites/LoginPage/LoginPage';

function App() {

  const [loginData, setLoginData] = useState([]);

  return (
    <Router>
      
      <Navigation />

      <Switch>

        <Route exact path="/Forside">
          <FrontPage />
        </Route>

        <Route path="/Produkter">
          <ProductPage loginData={loginData} setLoginData={setLoginData} />
        </Route>

        <Route exact path="/Kontakt">
          <ContactPage />
        </Route>

        <Route exact path="/Login">
          <LoginPage loginData={loginData} setLoginData={setLoginData} />
        </Route>

        <Route exact path="/">
          <Redirect to="/Forside" />
        </Route>

        <Route path="/">
          <h2>Denne side findes ikke</h2>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
