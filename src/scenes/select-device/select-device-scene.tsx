import React from 'react';
import {View, FlatList} from 'react-native';
import {WifiEntry} from 'react-native-wifi-reborn';
import {styled} from 'tailwind-for-react-native';
import CoreButton from '../../components/buttons/core-button';
import Title from '../../components/texts/title';

const DeviceButton = styled(CoreButton)`
  bg-secondaryColor.600
  dark:bg-secondaryColorDark.600
`;

type DeviceItemProps = {
  onPress: (WifiEntry) => void;
};

const DeviceItem = ({onPress, ...device}: WifiEntry & DeviceItemProps) => {
  return (
    <DeviceButton onPress={() => onPress(device)}>{device?.SSID}</DeviceButton>
  );
};

const Separator = styled(View)`mb-hp(2)`;

type DevicesListProps = {
  iotDevices: WifiEntry[];
  onPress: (WifiEntry) => void;
};

const DevicesList = ({iotDevices, onPress}: DevicesListProps) => {
  return (
    <FlatList
      data={iotDevices}
      renderItem={({item}) => <DeviceItem {...item} onPress={onPress} />}
      keyExtractor={item => item.BSSID}
      ItemSeparatorComponent={Separator}
    />
  );
};

const MainContainer = styled(View)`
  flex-1
  bg-primaryColor.main
  dark:bg-primaryColorDark.main
  pt-hp(2)
  pb-hp(5)
  px-wp(5)
`;

const SelectDeviceTitle = styled(Title)`
  mb-hp(2)
`;

const CustomCoreButtonContainer = styled(View)`
  flex-1
  justify-end
`;

const CustomCoreButton = styled(CoreButton)``;

const SelectDeviceScene = ({
  onPressDiscoverNetworks,
  iotDevices,
  onPressDevice,
}) => {
  return (
    <MainContainer>
      <SelectDeviceTitle>Wifi devices</SelectDeviceTitle>
      <DevicesList iotDevices={iotDevices} onPress={onPressDevice} />
      <CustomCoreButtonContainer>
        <CustomCoreButton onPress={onPressDiscoverNetworks}>
          Re-Scan
        </CustomCoreButton>
      </CustomCoreButtonContainer>
    </MainContainer>
  );
};

export default SelectDeviceScene;
