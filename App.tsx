import React, {useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import ReactQueryProvider from './src/providers/react-query-provider';
import ThemeProvider from './src/providers/theme-provider';
import ApplicationStack from './src/stacks/application-stack';

const useRequestAccessFineLocation = () => {
  useEffect(() => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(() => {
      // TODO: add alert message if not granted permission
    });
  }, []);
};

const App = () => {
  useRequestAccessFineLocation();
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <ApplicationStack />
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default App;
