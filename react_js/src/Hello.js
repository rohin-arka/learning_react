import React from 'react';
// Importing package react
// Importing package using ES6 with npm as below
import ReactDOM from 'react-dom';
// Package can also be imported using ES6 with npm as
// var ReactDOM = require('react-dom');
// ReactDOM packages provides DOM-specific methods like render as used below.

// The class method render jsx expression which is react element into the supplied container
// below first parameter is the react element and second parameter is the container
// NOTE: React only updates element if contianers node is change because of its internal
// implementation of DOM diffing algorithm
// ReactDOM.render( element, container, [callback])
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));
// Renders a header hello world in DOM element which id is root
