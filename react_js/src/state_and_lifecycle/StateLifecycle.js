import React from 'react';
import ReactDOM from 'react-dom';
// state is similar to code but it is private and fully controlled by the component.


// function Clock(props){
//   return (
//       <div>
//         <h1>Hello world</h1>
//         <h2>it is {props.date.toLocaleTimeString()} hello</h2>
//       </div>
//   )
// }


function tick(){
  ReactDOM.render(<Clock date = {new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);

// Converting function to a class
// Converting function statement to a class need 5  steps.
// Create an ES6 class with the same name and inherit React.Component
// eg: about Clock function can be class Clock extends React.Component
// move the return jsx expression of the function to the render function
// Replace props with this.props in the render ()
// Delete function
// Example
// class Clock extends React.Component{
//   render(){
//     <div>
//       <h1>Hello world</h1>
//       <h2>it is {this.props.date.toLocaleTimeString()} hello</h2>
//     </div>
//   }
// }

// Adding local state to a class
// replace this.props date with this.state.date in the render method()
// Add a class constructor
// pass props to the base class constructor i.e. React.Component
// super(props) pass props to base constructor. class component should always pass props to base constructor
// Remove date prop from class Clock in render first argument
// class Clock extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = { date: new Date() };
//   }
//   render(){
//     <div>
//       <h1>Hello world</h1>
//       <h2>it is {this.state.date.toLocaleTimeString()} hello</h2>
//     </div>
//   }
// }
//
// ReactDOM.render(<Clock />, document.getElementById('root'));

// Adding lifecycle method to the class
// In application with many component it is very important to free up resources taken by the components when
// they are destroyed
// We want to set up a timer whenever the clock is rendered to the DOM for the first time. This is called mounting
// in react
// Special methods on the component class to run some code when component mounts and unmounts.
// Below is the example
// the componentDidMount and Component Will mount method are called life cycle hook
// The componentDidMount method runs after the component output has been rendered to the DOM
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Hello It is {this.state.date.toLocaleTimeString()} </h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
