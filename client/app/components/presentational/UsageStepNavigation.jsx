import React from 'react';
import { Link } from 'react-router-dom';

const UsageStepNavigation = ({ currentStep, totalSteps, setStep }) => {
  const previousButton = (currentStep !== 0) ? <a className="previous" href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep - 1); }}><section className="button">Previous</section></a> : null;
    const nextButton = (totalSteps - 1 > currentStep) ? <a className="next" href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep + 1); }}><section className="button">Next</section></a> : ((currentStep === totalSteps - 1) ? <Link to="/experience">Experience</Link> : null);

  return (
    <div className="nextAndPrevious">
      {previousButton}
      {nextButton}
    </div>
  )
}

export default UsageStepNavigation;
