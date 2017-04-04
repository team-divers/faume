import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return (
    <div>
        <section className="content">
            <section className="header">
                <h1 className="tuinVanNoordBorder">Welkom</h1>
            </section>
            <p>Dit is de virtuele ervaring die jou de vrijheid laat proeven en de historie laat beleven. In deze ervaring kun je de Tuin van Noord in virtuele realiteit bekijken.</p>
            <Link to="/device"><section className="button">Kies apparaat</section></Link>
        </section>
        <div className="backgroundImageSplashScreen homesBackground"></div>
        <section className="wizard">
            <h1 className="tuinVanNoordBorder">1/4</h1>
        </section>
    </div>

  )
}

export default SplashScreen;
