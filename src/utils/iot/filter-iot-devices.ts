import {DEVICES_NAMES_WHITE_LIST} from '../../constants/iot';

export const filterIotDevices = ({SSID}) =>
  DEVICES_NAMES_WHITE_LIST.includes(SSID);
