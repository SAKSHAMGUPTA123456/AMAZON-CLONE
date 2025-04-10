import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Setup } from './Setuprouter';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient=new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
  {/* Wrap the whole app with QueryClientProvider */}
  <QueryClientProvider client={queryClient}>
    <Setup />
  </QueryClientProvider>
</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();