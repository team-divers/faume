import React from 'react';
import DeviceScreen from '../presentational/DeviceScreen';
const devices = require('../../devices.json');

class DeviceScreenContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      deviceChoice: null
    }
  }

  chooseDevice(deviceChoice) {
    this.setState({
      ...this.state,
      deviceChoice
    });
  }

  render() {
    return <DeviceScreen
      devices={devices.results}
      deviceChoice={this.state.deviceChoice}
      onChooseDevice={this.chooseDevice.bind(this)}
    />
  }
}

export default DeviceScreenContainer;
