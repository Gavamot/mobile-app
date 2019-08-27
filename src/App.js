import React, { Component } from 'react'
import history from 'brouserHistory'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.scss'
import 'font-awesome/css/font-awesome.min.css'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/" name="Home" render = { props => <DefaultLayout { ...props } /> } />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}
export default App;
