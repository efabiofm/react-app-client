import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import MainNavbar from './components/MainNavbar';
import NotFound from './components/NotFound';
import HouseList from './components/HouseList';
import MapView from './components/MapView';
import store from './store';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MainNavbar/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/realestate" component={HouseList} />
          <Route exact path="/map" component={MapView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Router;