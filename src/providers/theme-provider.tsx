import React, {PropsWithChildren} from 'react';
import {TWRNProvider} from 'tailwind-for-react-native';
import {colors} from '../theme/colors';
import {styles} from '../theme/styles';

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <TWRNProvider
      theme={{
        colors,
        styles,
        mode: 'dark',
      }}>
      {children}
    </TWRNProvider>
  );
};

export default ThemeProvider;
