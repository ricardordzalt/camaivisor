import React from 'react';
import SelectNetworkScene from './select-network-scene';
import useSelectNetwork from './use-select-network';

const SelectNetwork = ({route}) => {
  const {wifiDeviceSSID} = route?.params ?? {};
  const props = useSelectNetwork({wifiDeviceSSID});
  return <SelectNetworkScene {...props} />;
};

export default SelectNetwork;
