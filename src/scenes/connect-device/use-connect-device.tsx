import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {
  connectDeviceToNetwork,
  connectToProtectedSSID,
} from '../../queries/wifi';
import {
  DEVICES_DEFAULT_IP_ADDRESSES,
  DEVICES_PASSWORDS,
} from '../../constants/iot';

type UseElectNetwork = {
  wifiDeviceSSID: string;
  wifiNetworkSSID: string;
};

const useSelectNetwork = ({
  wifiDeviceSSID,
  wifiNetworkSSID,
}: UseElectNetwork) => {
  // const [wifiConnectionOptions, setDeviceSSIDAndPassword] = useState({
  //   deviceSSID: null,
  //   devicePassword: null
  // })
  // const {deviceSSID, devicePassword} = wifiConnectionOptions;
  const {
    refetch: refetchConnectDevice,
    isSuccess: connectDeviceSuccess,
    error,
  } = useQuery({
    queryKey: ['connect-device'],
    queryFn: () =>
      connectToProtectedSSID({
        SSID: wifiDeviceSSID,
        password: DEVICES_PASSWORDS[wifiDeviceSSID] ?? '',
        isWEP: false,
      }),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const form = useForm({
    defaultValues: {
      password: '2BA68F8ExC8KZZ8v',
    },
  });

  const onSubmit = data => {
    refetchConnectDevice();
  };
  const {password} = form.watch();
  const {refetch: refetchConnectNetwork, isSuccess: connectNetworkeSuccess} =
    useQuery({
      queryKey: ['connect-device', password],
      queryFn: () =>
        connectDeviceToNetwork({
          SSID: wifiNetworkSSID,
          password: password,
          gateway: DEVICES_DEFAULT_IP_ADDRESSES[wifiDeviceSSID] ?? '',
        }),
      refetchOnWindowFocus: false,
      enabled: false,
    });

  useEffect(() => {
    if (connectDeviceSuccess) {
      refetchConnectNetwork();
    }
  }, [connectDeviceSuccess]);

  const onPressConnect = form.handleSubmit(onSubmit);

  return {
    onPressConnect,
    form,
  };
};

export default useSelectNetwork;
