import React from 'react';
import ReactDOM from 'react-dom';
import { isReturnStatement } from 'typescript';

function MyComponent(){
  return(
    <div>
    <h1>Hi..!</h1>
    </div>

  )
}

ReactDOM.render(<MyComponent></MyComponent>,document.getElementById("root"))