import store from './src/redux/store';
import React from 'react';
import {Provider} from 'react-redux';
import CakeContainer from './src/components/CakeContainer';
import HooksCakeContainer from './src/components/HooksCakeContainer';
import IceCreamContainer from './src/components/IceCreamContainer';
import NewCakeContainer from './src/components/NewCakeContainer';
import ItemContainer from './src/components/ItemContainer';
import UserContainer from './src/components/UserContainer';

const App = () => {
  return (
    <Provider store={store}>
      <ItemContainer />
      <ItemContainer cake="aa" />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <UserContainer />
    </Provider>
  );
};

export default App;
