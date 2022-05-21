import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { name: 'HTML', description: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.' },
  { name: 'CSS', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ' },
  { name: 'JavaScript', description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion topics={topics}/>);
