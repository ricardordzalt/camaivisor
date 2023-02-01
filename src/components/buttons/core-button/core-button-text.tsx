import React from 'react';
import {styled} from 'tailwind-for-react-native';
import {Text} from 'react-native';

const CustomTextButtom = styled(Text)`
  color-textColor.main
  dark:color-textColorDark.main
  font-bold
  font-size-hp(2)
`;

const CoreButtonText = props => {
  return <CustomTextButtom {...props} />;
};

export default CoreButtonText;
