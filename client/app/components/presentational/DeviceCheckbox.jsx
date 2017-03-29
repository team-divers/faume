import React from 'react';

const DeviceCheckbox = ({ labelText, deviceValue, onChange, checked }) => {
  return (
    <label htmlFor={`checkbox--${deviceValue}`}>
      <input id={`checkbox--${deviceValue}`} type="radio" name="device" value={deviceValue} checked={checked} onChange={onChange} />
      <span>{labelText}</span>
    </label>
  )
}

export default DeviceCheckbox;
