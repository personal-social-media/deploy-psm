import {Helmet, HelmetProvider} from 'react-helmet-async';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/home';
import PageFooter from './page/footer';
import PageHeader from './page/header';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Deploy Personal Social Media</title>
      </Helmet>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <div className="py-3">
            <PageHeader/>
          </div>
          <Router basename="/deploy-psm">
            <Switch>
              <Route path="/" exact>
                <HomePage/>
              </Route>
            </Switch>
          </Router>
        </div>
        <div className="py-3 bg-blue-600">
          <PageFooter/>
        </div>
      </div>
    </HelmetProvider>
  );
}
