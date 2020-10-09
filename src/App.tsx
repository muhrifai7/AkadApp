import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { Provider } from 'react-redux';
// import store from './redux/ducks/store';
// import {API_URL, API_TOKEN} from '@env';
import {MainApp} from './router';

const App = (): any => {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
};

export default App;
