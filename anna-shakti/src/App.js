import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import WhatWeDoPage from './component/WhatWeDoPage';
import ContactUsPage from './component/ContactUsPage';
import DonatePage from './component/DonatePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/what-we-do" component={WhatWeDoPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/donate" component={DonatePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
