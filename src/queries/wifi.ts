import WifiManager, {WifiEntry} from 'react-native-wifi-reborn';

export const reScanAndLoadWifiList = (): Promise<WifiEntry[]> =>
  WifiManager.reScanAndLoadWifiList();

export const connectToProtectedSSID = ({
  SSID,
  password,
  isWEP,
}: {SSID: string, password: string | null, isWEP: boolean}): Promise<void> => 
  WifiManager.connectToProtectedSSID(SSID, password, isWEP);

export const connectDeviceToNetwork = ({
  SSID,
  password,
  gateway,  
}: {SSID: string, password: string | null, gateway: string}) => {
  console.log({SSID, password, gateway})
  return fetch(`http://${gateway}/?SSID=${SSID}&password=${password}`, {method: 'GET'});
  // return fetch(`http://${gateway}/H`, {method: 'POST', body: JSON.stringify({ SSID, password })});
}