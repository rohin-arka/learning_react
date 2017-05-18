import React from 'react';
import ReactDOM from 'react-dom';


// Handling DOM elements is similar with react elements. But there are syntatic differences as below:
// React element are named using camelcase rather than lowercase
// with jsx you pass a function as the event handler, rather than a string.

// For example, the html
// <button onclick='activateUser()'>click to activate user</button>
// // Above HtML is slightly different than react way
//
// <button onClick={activateUser}>click to activate user</button>

// Another main important in react is false cannot be return to prevent DOM default behaviour.
// You must call Prevent Default explicitly.
// Example
// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// In react above code looks as below
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }
//
//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }
// e is a synthetic element
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// NOTE:
// The meaning of this in jsx element need to be highly take care
// In JSX class method are not bound by default so
// If parenthesis in function need to omitted like handleclick() then it is important bind with this
