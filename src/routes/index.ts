import SelectDevice from '../scenes/select-device';
import SelectNetwork from '../scenes/select-network';
import ConnectDevice from '../scenes/connect-device';
import {ROUTE_NAMES} from '../constants/routes';
const routes = [
  {
    name: ROUTE_NAMES.SELECT_DEVICE,
    component: SelectDevice,
  },
  {
    name: ROUTE_NAMES.SELECT_NETWORK,
    component: SelectNetwork,
  },
  {
    name: ROUTE_NAMES.CONNECT_DEVICE,
    component: ConnectDevice,
  },
];

export default routes;
