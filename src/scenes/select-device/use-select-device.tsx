import {WifiEntry} from 'react-native-wifi-reborn';
import {useEffect, useMemo, useState} from 'react';
import {filterIotDevices} from '../../utils/iot/filter-iot-devices';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../constants/routes';
import {useQuery} from '@tanstack/react-query';
import {reScanAndLoadWifiList} from '../../queries/wifi';

const useSelectDevice = () => {
  const navigation = useNavigation();

  const {data, refetch} = useQuery({
    // TODO: Add error and loading handlers
    queryKey: ['wifi'],
    queryFn: reScanAndLoadWifiList,
  });

  const networks = useMemo(() => data?.filter(filterIotDevices), [data]);

  const [iotDevices, setIotDevices] = useState<WifiEntry[]>([]);

  useEffect(() => {
    if (networks !== undefined) {
      setIotDevices(networks);
    }
  }, [networks]);

  const onPressDiscoverNetworks = refetch;

  const onPressDevice = (wifiDevice: WifiEntry) => {
    const wifiDeviceSSID = wifiDevice?.SSID;
    //@ts-ignore
    navigation.navigate(ROUTE_NAMES.SELECT_NETWORK, {
      wifiDeviceSSID,
    });
  };

  return {
    iotDevices,
    onPressDevice,
    onPressDiscoverNetworks,
  };
};

export default useSelectDevice;
