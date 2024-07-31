import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID || 'G-823TKZPV5F',
};

console.log('Google Tag Args: ', tagManagerArgs);

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
