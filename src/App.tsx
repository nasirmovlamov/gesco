import 'app/assets/vendor/bootstrap/bootstrap.scss';
import 'app/assets/style/scss/style.scss';

import { Provider } from 'react-redux'
import React from 'react';
import { Routes } from 'app/components/routes/Routes';
import { store } from 'app/components/store/store';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
