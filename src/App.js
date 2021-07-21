import {Helmet, HelmetProvider} from 'react-helmet-async';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/home';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Deploy Personal Social Media</title>
      </Helmet>
      <Router basename="/deploy-psm">
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
}
