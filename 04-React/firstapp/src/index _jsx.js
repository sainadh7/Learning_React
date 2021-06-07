import React from 'react'
import ReactDOM from 'react-dom'

//let loginview = <div>Welcome JSX</div>
let loginview = <div>
  <label>Username:</label>
  <input></input>
  <label>Password:</label>
  <input></input>
  </div>;

/*
let hdr1 = React.createElement('h1',null,"H1:Welcome to react..!")
let hdr2 = React.createElement('h2',null,"H2:Welcome to react...!")
let logele = React.createElement('input',null)
let bt = React.createElement('button',null,"Click Me")
*/

ReactDOM.render(loginview,document.getElementById("root"))
