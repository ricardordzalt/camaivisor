import React from 'react';
import {styled} from 'tailwind-for-react-native';
import {TextInput as RNTextInput} from 'react-native';

const CustomTextInput = styled(RNTextInput)`
  bg-secondaryColor.600
  dark:bg-secondaryColorDark.600
  color-textColor.main
  dark:color-textColorDark.main
  font-size-hp(2.5)
  rounded-hp(1)
  px-hp(2)
`;

const TextInput = props => {
  return <CustomTextInput {...props} />;
};

export default TextInput;
