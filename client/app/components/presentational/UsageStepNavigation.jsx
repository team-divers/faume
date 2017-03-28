import React from 'react';
import { Link } from 'react-router-dom';

const UsageStepNavigation = ({ currentStep, totalSteps, setStep }) => {
  const previousButton = (currentStep !== 0) ? <a href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep - 1); }}>Previous</a> : null;
  const nextButton = (totalSteps - 1 > currentStep) ? <a href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep + 1); }}>Next</a> : ((currentStep === totalSteps - 1) ? <Link to="/experience">Experience</Link> : null);

  return (
    <div>
      {previousButton}
      {nextButton}
    </div>
  )
}

export default UsageStepNavigation;
