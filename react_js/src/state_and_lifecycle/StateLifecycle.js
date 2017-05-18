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
// Recap
// When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock
// component. Since Clock needs to display the current time, it initializes this.state with an object
// including the current time. We will later update this state.
//
// React then calls the Clock component's render() method.
// This is how React learns what should be displayed on the screen.
// React then updates the DOM to match the Clock's render output.
//
// When the Clock output is inserted in the DOM, React calls the componentDidMount()
// lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call
// tick() once a second.
//
// Every second the browser calls the tick() method. Inside it, the Clock component
// schedules a UI update by calling setState() with an object containing the current time.
// Thanks to the setState() call, React knows the state has changed, and calls render() method again
// to learn what should be on the screen. This time, this.state.date in the render() method will be
// different, and so the render output will include the updated time. React updates the DOM accordingly.
//
// If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
// lifecycle hook so the timer is stopped.

// Use state correctly
this.state.stateName = 'hola'; // this is bad
this.setState({ stateName: 'voila' }); // React provudes setState methodwhich can change state.
// NOTE: this.state is only allow initialially in constructor
// The data flows down
// Neither parent nor children components can know if a certain component is stateful or stateless
// This is why state is often called local or  encapsulated.
// Component can pass its state down as props to its child components
// <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// or as a props <FormattedDate date={this.state.date} />
