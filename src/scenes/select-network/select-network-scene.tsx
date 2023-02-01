import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {WifiEntry} from 'react-native-wifi-reborn';
import {styled} from 'tailwind-for-react-native';
import CoreButton from '../../components/buttons/core-button';
import Title from '../../components/texts/title';

const NetworkButton = styled(CoreButton)`
  bg-secondaryColor.600
  dark:bg-secondaryColorDark.600
`;

type NetworkItemProps = {
  onPress: (WifiEntry) => void;
};

const NetworkItem = ({onPress, ...network}: WifiEntry & NetworkItemProps) => {
  return (
    <NetworkButton onPress={() => onPress(network)}>
      {network?.SSID}
    </NetworkButton>
  );
};

const Separator = styled(View)`mb-hp(2)`;

type NetworksListProps = {
  wifiNetworks: WifiEntry[];
  onPress: (WifiEntry) => void;
};

const NetworksList = ({wifiNetworks, onPress}: NetworksListProps) => {
  return (
    <FlatList
      data={wifiNetworks}
      renderItem={({item}) => <NetworkItem {...item} onPress={onPress} />}
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

const SelectNetworkTitle = styled(Title)`
  mb-hp(2)
`;

const CustomCoreButtonContainer = styled(View)`
  flex-1
  justify-end
`;

const CustomCoreButton = styled(CoreButton)``;

const SelectNetworkScene = ({
  onPressDiscoverNetworks,
  wifiNetworks,
  onPressNetwork,
}) => {
  return (
    <MainContainer>
      <SelectNetworkTitle>
        Select a network to connect your device
      </SelectNetworkTitle>
      <NetworksList wifiNetworks={wifiNetworks} onPress={onPressNetwork} />
      <CustomCoreButtonContainer>
        <CustomCoreButton onPress={onPressDiscoverNetworks}>
          Search
        </CustomCoreButton>
      </CustomCoreButtonContainer>
    </MainContainer>
  );
};

export default SelectNetworkScene;
