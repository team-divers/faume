import React from 'react';
import UsageStep from '../presentational/UsageStep';
import UsageStepNavigation from '../presentational/UsageStepNavigation';
const steps = require('../../usage.json');

class UsageScreenContainer extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentStep: 0,
      loadingUsages: true,
      usage: null
    }
  }

  componentWillMount() {
    this.getSteps()
      .then(usage => {
        if (usage) {
          this.setState({
            ...this.state,
            loadingUsages: false,
            usage
          });
        }
      });
  }

  getSteps() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(steps.results.find(s => s.type == [this.props.match.params.device]));
      }, 1000)
    })
  }

  setStep(step) {
    this.setState({
      ...this.state,
      currentStep: step
    });
  }

  render() {
    return (
      <div>
        {(this.state.loadingUsages ?
          (
            <h1>Loading...</h1>
          ) :
          (
            <div>
              <UsageStep
                title={this.state.usage.steps[this.state.currentStep].title}
                description={this.state.usage.steps[this.state.currentStep].description}
              />
              <UsageStepNavigation
                currentStep={this.state.currentStep}
                totalSteps={this.state.usage.steps.length}
                setStep={this.setStep.bind(this)}
              />
            </div>
          )
        )}
      </div>
    )
  }
}

export default UsageScreenContainer;
