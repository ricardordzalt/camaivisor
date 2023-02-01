import React from 'react';
import ConnectDeviceScene from './connect-device-scene';
import useSelectNetwork from './use-connect-device';

const ConnectDevice = ({route}) => {
  const {wifiDeviceSSID, wifiNetworkSSID} = route?.params ?? {};
  const hookProps = useSelectNetwork({wifiDeviceSSID, wifiNetworkSSID});
  const props = {
    ...hookProps,
    wifiDeviceSSID,
    wifiNetworkSSID,
  };
  return <ConnectDeviceScene {...props} />;
};

export default ConnectDevice;
