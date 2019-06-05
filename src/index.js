import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import store from '~/store';
import Routes from '~/routes';

import Player from '~/components/Player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
