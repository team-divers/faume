import React from 'react';
import { Link } from 'react-router-dom';
import DeviceCheckbox from './DeviceCheckbox';

const DeviceScreen = ({ devices, deviceChoice, onChooseDevice }) => {
  return (
    <div>
      <div>
        <h1>Choose your device</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <form>
          {devices.map(d => <DeviceCheckbox key={d.value} labelText={d.title} labelValue={d.value} checked={d.value === deviceChoice} onChange={() => {
            onChooseDevice(d.value);
          }} />)}
        </form>
      </div>

      <Link to={`/usage/${deviceChoice}`}>Get instructions</Link>
    </div>
  )
}

export default DeviceScreen;
