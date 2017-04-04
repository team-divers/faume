import React from 'react';
import {Link} from 'react-router-dom';
import DeviceCheckbox from './DeviceCheckbox';

const DeviceScreen = ({devices, deviceChoice, onChooseDevice}) => {
    return (
        <div>
            <section className="content">
                <section className="header">
                    <h1 className="tuinVanNoordBorder">Kies je apparaat!</h1>
                </section>
                <p>Het is belangrijk dat wij weten welk apparaat jij gebruikt! Op deze manier kunnen we de ervaring afstemmen.</p>
                <div>
                    {devices.map(d =>
                        <Link key={d.value} to={`/usage/${d.value}`}>
                            <section className="button">{d.title}</section>
                        </Link>)
                    }
                </div>
            </section>
            <div className="backgroundImageSplashScreen deviceBackground"></div>
            <section className="wizard deviceWizard">
                <h1 className="tuinVanNoordBorder">2/4</h1>
            </section>
        </div>
    )
}

export default DeviceScreen;
