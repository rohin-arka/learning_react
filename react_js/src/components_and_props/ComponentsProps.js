import React from 'react';
import ReactDOM from'react-dom';
// ComponentsProps
// Component decouple  UI, isolate and create reusable pieces
// Conceptually components are js function return jsx expression


// Defining component
// Mainly there are two ways to define components
// class component and
// functional component

// functional component
function Welcome(props){
  return <h1>{props.fullName}</h1>;
}
// Welcome function returns a react element and accepts props which is object with data.
// Functional component are literally js functions which returns react element.
const props = { fullName: 'My name is components and props' };
ReactDOM.render(Welcome(props), document.getElementById('root'));

// ES6 clases can also be used to define component which is known as class components
// the above functional can als obe rewritten as class component as below
// class WelcomeClass extends React.component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// React component can represent tags and user defined user-defined components.
// tag representing component
const tagComponent = <h1>tag component</h1>;

ReactDOM.render(tagComponent, document.getElementById('root'));


// const userDefinedComponent = <welcome name='thopda na sopda priyanka chopda :)'>;
// When react detects and element has user defined component then it passes jsx attibutes to this component
// as a single object which is known as props.

// Example

const element = <Welcome name="Nusrat Fateh Ali Khan" />;
ReactDOM.render(element, document.getElementById('root'));


// Lets extract behind the scene stories
// When we user Welcome with name propery set as 'Nusrat Fateh Ali Khan' in angle bracket
// react calls welcome component with name: 'Nusrat Fateh Ali Khan' as the props.
// Our welcome literal js function returns react component with the props passed.

// NOTE::
// Always start component with a capital letter
// For example <div /> represent represent html tag whereas <Welcome /> represent component 
