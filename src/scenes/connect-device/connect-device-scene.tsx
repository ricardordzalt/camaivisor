import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import {styled} from 'tailwind-for-react-native';
import CoreButton from '../../components/buttons/core-button';
import TextInput from '../../components/inputs/text-input';
import Title from '../../components/texts/title';

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

const ConnectDeviceScene = ({
  wifiDeviceSSID,
  wifiNetworkSSID,
  onPressConnect,
  form,
}) => {
  const {control} = form;
  return (
    <MainContainer>
      <SelectNetworkTitle>
        Type {wifiNetworkSSID} security password to connect your{' '}
        {wifiDeviceSSID}
      </SelectNetworkTitle>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <TextInput onChangeText={onChange} value={value} />
        )}
        name="password"
      />
      <CustomCoreButtonContainer>
        <CustomCoreButton onPress={onPressConnect}>Connect</CustomCoreButton>
      </CustomCoreButtonContainer>
    </MainContainer>
  );
};

export default ConnectDeviceScene;
