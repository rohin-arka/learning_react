// Rendering elements
// element refers to what we seen in screen
// it is a smallest building blocks of react apps
// Elements are what components are made of.
// example of element
// const element = <h1>Hello, world</h1>;
// NOTE: React elements are immutable which means its state cannot be changed
// elements in fact represents UI elements at certain point of time.

import React from 'react';

import ReactDOM from 'react-dom';

// <div id = 'root'>
// </div>
const headerElement = <h1>Hello world</h1>;
// to render a react element into a root DOM node as in the above.
// we need to pass first parameter element and second parameter dom to render routine.

ReactDOM.render(headerElement, document.getElementById('root'));

function tick(){
  const element = (<div>
                    <h1> Hello world </h1>
                    <h2> It is {new Date().toLocaleTimeString()}. </h2>
                   </div>);
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
// setInterval is a global method which repeatedly calls a function or executes a code snippet
// at a given time as passed in the second parameter.
// above function is being passed and time in milliseconds is passed as second parameter.
// It calls ReactDOM.render every second from a callback setInterval()

// NOTE:
// React only updates the dom that is changed
// The power of react seems here the react dom element compares, its tree with the previous one and only
// applies the dom updates the dom state.
// this things are visible by inspecting element.
// we are passing whole DOM tree in the render but react smart algorithm check diff and updte the dom state
// which is changed.
