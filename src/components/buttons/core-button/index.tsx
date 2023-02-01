import React, {PropsWithChildren} from 'react';
import {styled} from 'tailwind-for-react-native';
import {Pressable} from 'react-native';
import CoreButtonText from './core-button-text';

const CustomButton = styled(Pressable)`
  bg-secondaryColor.main
  dark:bg-secondaryColorDark.main
  items-center
  justify-center
  rounded-hp(5)
  min-h-hp(4)
  shadow7
`;

const CoreButton: React.FC<PropsWithChildren> = ({children, ...props}) => {
  return (
    <CustomButton {...props}>
      <CoreButtonText>{children}</CoreButtonText>
    </CustomButton>
  );
};

export default CoreButton;
