import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { App } from './templates/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
);
