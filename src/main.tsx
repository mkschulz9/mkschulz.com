import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: (import.meta as any).env.VITE_GTM_ID,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
