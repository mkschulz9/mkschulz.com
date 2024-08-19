import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-WCCNJ6KL',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
