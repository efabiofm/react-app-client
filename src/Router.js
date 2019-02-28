import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import MainNavbar from './components/MainNavbar';
// import NotFound from './components/NotFound';
import HouseList from './components/HouseList';
import Map from './components/Map';

const Router = () => (
  <>
    <BrowserRouter>
      <div>
        <MainNavbar/>
        <Route exact path="/" component={App} />
        <Route path="/realestate" component={HouseList} />
        <Route path="/map" component={Map} />
        {/*<Route component={NotFound} />*/}
      </div>
    </BrowserRouter>
  </>
)

export default Router;