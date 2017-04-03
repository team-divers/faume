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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
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
