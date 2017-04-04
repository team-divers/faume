import React from 'react';

const UsageStep = ({title, description}) => {
    return (
        <div>
            <section className="content">
                <section className="header">
                    <h1 className="tuinVanNoordBorder">{title}</h1>
                </section>
                <p>{description}</p>
            </section>
            <div className="backgroundImageSplashScreen usageBackground"></div>
        </div>
    )
}

export default UsageStep;
