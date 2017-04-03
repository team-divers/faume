import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return (
    <div>
        <section className="content">
            <section className="header">
                <h1 className="tuinVanNoordBorder">Welkom</h1>
            </section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to="/device"><section className="button">Choose device</section></Link>
        </section>
        <div className="backgroundImageSplashScreen homesBackground"></div>
        <section className="wizard">
            <h1 className="tuinVanNoordBorder">1/4</h1>
        </section>
    </div>

  )
}

export default SplashScreen;
