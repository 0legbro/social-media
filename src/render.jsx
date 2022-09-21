import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, { addPost } from './Redux/state';

export const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter><App state={state} addPost={addPost} /></BrowserRouter>
    </React.StrictMode>,
  );
};
