import React from 'react';

const UsageStepNavigation = ({ currentStep, totalSteps, setStep }) => {
  const previousButton = (currentStep !== 0) ? <a href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep - 1); }}>Previous</a> : null;
  const nextButton = (totalSteps - 1 > currentStep) ? <a href="#" onClick={(e) => { e.preventDefault(); setStep(currentStep + 1); }}>Next</a> : ((currentStep === totalSteps - 1) ? <h3>Finish</h3> : null);

  return (
    <div>
      {previousButton}
      {nextButton}
    </div>
  )
}

export default UsageStepNavigation;
