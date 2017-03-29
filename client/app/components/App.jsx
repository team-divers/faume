import React from 'react';
import SplashScreenContainer from './container/SplashScreenContainer';
import DeviceScreenContainer from './container/DeviceScreenContainer';
import UsageScreenContainer from './container/UsageScreenContainer';
import ExperienceScreenContainer from './container/ExperienceScreenContainer';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <main>
      <Route exact path="/" component={ExperienceScreenContainer}/>
      <Route path="/device" component={DeviceScreenContainer} />
      <Route path="/usage/:device" component={UsageScreenContainer} />
      <Route path="/experience" component={ExperienceScreenContainer} />
    </main>
  </Router>
)

export default App;
