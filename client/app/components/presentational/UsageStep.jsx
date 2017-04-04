import React from 'react';

const UsageStep = ({title, description}) => {
    return (
        <div>
            <section className="content">
                <section className="header">
                    <h1 className="tuinVanNoordBorder">{title}</h1>
                </section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <div className="backgroundImageSplashScreen usageBackground"></div>
            <section className="wizard">
                <h1 className="tuinVanNoordBorder">3/4</h1>
            </section>
        </div>
    )
}

export default UsageStep;
