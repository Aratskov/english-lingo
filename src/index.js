import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/english-lingo">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
