import React from 'react'
import ReactDOM from 'react-dom'


let hdr1 = React.createElement('h1',null,"H1:Welcome to react..!")
let hdr2 = React.createElement('h2',null,"H2:Welcome to react...!")
let logele = React.createElement('input',null)
let bt = React.createElement('button',null,"Click Me")

let dv = React.createElement('div',null,hdr1,hdr2,logele,bt)
ReactDOM.render(dv,document.getElementById("root"))
