import React from 'react';
import SplashScreenContainer from './container/SplashScreenContainer';
import DeviceScreenContainer from './container/DeviceScreenContainer';
import UsageScreenContainer from './container/UsageScreenContainer';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <main>
      <Route exact path="/" component={SplashScreenContainer}/>
      <Route path="/device" component={DeviceScreenContainer}/>
      <Route path="/usage/:device" component={UsageScreenContainer}/>
    </main>
  </Router>
)

export default App;
