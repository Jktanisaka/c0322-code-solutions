import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from './hot-button';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
