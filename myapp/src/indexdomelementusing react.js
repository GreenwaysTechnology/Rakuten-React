import React from 'react';
import ReactDOM from 'react-dom';

//create DOM node.
const Heading  = <h1>Hello React!!</h1> ; //document.createElement('h1').innerHTML='Hello'

const rootElement = document.getElementById('root');
//will convert virtual dom/virtual tree into javascript dom tree
ReactDOM.render(Heading,rootElement);