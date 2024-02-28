
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from '../src/Components/tasck4/store.js';
import App from './App.jsx';
import '../src/styles/css/style.css';
import '../src/styles/css/resets.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
