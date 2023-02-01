import React from 'react';
import {styled} from 'tailwind-for-react-native';
import {Text} from 'react-native';

const CustomTitle = styled(Text)`
  color-textColor.main
  dark:color-textColorDark.main
  font-size-hp(3)
`;

const Title: React.FC = props => {
  return <CustomTitle {...props} />;
};

export default Title;
