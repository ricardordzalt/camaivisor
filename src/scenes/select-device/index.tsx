import React from 'react';
import SelectDeviceScene from './select-device-scene';
import useSelectDevice from './use-select-device';

const SelectDevice = () => {
  const props = useSelectDevice();
  return <SelectDeviceScene {...props} />;
};

export default SelectDevice;
