import React from 'react';
import ReactDOM from 'react-dom/client';

const newEl = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('newEl', newEl);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(newEl);
