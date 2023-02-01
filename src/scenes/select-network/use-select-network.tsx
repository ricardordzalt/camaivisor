import {useNavigation} from '@react-navigation/native';
import {useEffect, useMemo, useState} from 'react';
import WifiManager, {WifiEntry} from 'react-native-wifi-reborn';
import {ROUTE_NAMES} from '../../constants/routes';
import {reScanAndLoadWifiList} from '../../queries/wifi';
import {filterWifiNetworks} from '../../utils/iot/filter-wifi-networks';
import {useQuery} from '@tanstack/react-query';

const useSelectNetwork = ({wifiDeviceSSID}) => {
  const navigation = useNavigation();

  const {data, refetch} = useQuery({
    // TODO: Add error and loading handlers
    queryKey: ['wifi'],
    queryFn: reScanAndLoadWifiList,
  });

  const networks = useMemo(() => data?.filter(filterWifiNetworks), [data]);

  const [wifiNetworks, setWifiNetworks] = useState<WifiEntry[]>([]);

  useEffect(() => {
    if (networks !== undefined) {
      setWifiNetworks(networks);
    }
  }, [networks]);

  const onPressDiscoverNetworks = refetch;

  const onPressNetwork = wifiNetwork => {
    const wifiNetworkSSID = wifiNetwork?.SSID;
    //@ts-ignore
    navigation.navigate(ROUTE_NAMES.CONNECT_DEVICE, {
      wifiDeviceSSID,
      wifiNetworkSSID,
    });
  };

  return {
    wifiNetworks,
    onPressNetwork,
    onPressDiscoverNetworks,
  };
};

export default useSelectNetwork;
