// loading files in header ES5 require syntax.
var React = require('react');
var ReactDOM = require('react-dom');

// Defining constant element
// element value is assign as jsx expression which product react elements.
// Jsx expression refers to Javascript expression.
const element = <h1>Hello World</h1>;

// Embedding expression in Jsx
//JavaScript expression in JSX can be embedd wrapping it in curly braces.
// Example :

// Precondition: need to pass parameter user object
function formatName(user){
  return user.firstName +  ' ' + user.lastName;
}
// post condition returns user full name;

const user = { firstName: 'react', lastName: 'learner',
               picURL: 'https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/ZRoAAOSwfRdZFLQb/$_35.JPG' };

const dom = document.getElementById('root')

// curly braces are used to interpolate variable/function call as below
// JSX expression can also be used as multiline as below
const hello = (
  <h1>Hello, {formatName(user)}</h1>
);
// ReactDOM.render(<h1>{formatName(user)}</h1>, dom);
// ReactDOM.render(hello, dom);


// Part two
// JSX is a expression too
// JSX converts into js objects after compilation

function greet(user){
  if (user){
    return <h1>Hello, User!</h1>;
  }
  else{
    return <h1>Hello, Anon :)</h1>;
  }
}
// ReactDOM.render(greet(user), dom);
// ReactDOM.render(greet(), dom);

// Specifying Attributes for html tags in jsx expression

const attributeElement = <h1 id = 'test' > string literal can used to specify attributes</h1>;
//NOTE: closing tag of html tag is very important in jsx expression. Otherwise
//      It is invalid expression. for self closign tag / should be used as last as below.
const image = <img src = {user.picURL} />;
ReactDOM.render(image, dom);
ReactDOM.render(attributeElement, dom);


// Specifying children with JSX

const childrenDom  = (
  <div id = 'parent'>
    <h1>Hello from inside parent</h1>
    <div id = 'elder_children'>
      <h2>I am elder children :)</h2>
    </div>
  </div>
);
// VERY IMPORTANT :) NOTE: REACT dom use camelcase propery naming convention insted of vanilla
                        // HTML attributes names;
                        // example: class becomes className is JSX
                        // class is a single word due to conflict of name in reserve words of JSX
                        // it is className/
                        // tabindex is tabIndex.
ReactDOM.render(childrenDom, dom);


// JSX prevents injext attacks
const response = response.potentiallyMaliciousInput;

const title = <h2>{response}</h2>;

// JSx representing objects
