import React from 'react';
import ReactDOM from 'react-dom';
// Conditional rendering in react works same as in javascript
// Javascript conditional staetement can be use to create react element as

function RegisteredUserGreeting(props){
  return <h1>Welcome {props.fullName}</h1>;
}

function GuestUserGreeting(){
  return <h1>Welcome Guest</h1>;
}
// Now greeting component to greet user based on user type can be created using conditional statement

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <RegisteredUserGreeting fullName='Hello Kaley dai' />;
  }else{
    return <GuestUserGreeting />;
  }
}
ReactDOM.render(<Greeting isLoggedIn={true} />, document.getElementById('root'));
