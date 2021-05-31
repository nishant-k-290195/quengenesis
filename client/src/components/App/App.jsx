import React, { useEffect } from 'react';
import './App.css';
import Header from '../shared/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ReactPixel from 'react-facebook-pixel';
import About from '../pages/About/About';
import Marketing from '../pages/Marketing/Marketing';
import It from '../pages/It/It';
import ApiIntegration from '../pages/ApiIntegration/ApiIntegration';
import Contact from '../pages/Contact/Contact';
import Payment from '../pages/Payment/Payment';
import Footer from '../shared/Footer/Footer';
import ReactGA from 'react-ga';

const advancedMatching = { em: 'info@quengenesis.io' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};


function App() {
  useEffect(()=>{
    ReactPixel.init('1399959230371123', advancedMatching, options);
    ReactPixel.pageView();

    ReactGA.initialize('UA-181579330-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sales-and-marketing-consulting' component={Marketing} />
        <Route path='/technology-and-it-services' component={It} />
        <Route path='/api-integration' component={ApiIntegration} />
        <Route path='/contact' component={Contact} />
        <Route path='/payment' component={Payment} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
