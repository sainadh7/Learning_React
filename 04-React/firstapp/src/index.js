import React from 'react'
import ReactDOM from 'react-dom'
function MyComponent(){

  return(
    <div>
      <h2>This is a react component..!</h2>
    </div>
  )

}
function MyComponentWithModel(){
  //Data Binding : Binding data from model to view.
  let msg = "A react component with Model..!"
  return(
    <div>
      <h1>{msg}</h1>
    </div>
  )
}
function MyHeader(props){
  return(
    <div>
      <h1>{props.msg1}</h1>
      <h1>{props.msg2}</h1>
    </div>
  )
}
function MyComponentWithBody(props){
  return(
    <div>
      <h1>{props.msg1}</h1>
      <h1>{props.children}</h1>
    </div>
  )
}
//ReactDOM.render(MyComponent(),document.getElementById("root"))
//ReactDOM.render(<MyComponent></MyComponent>,document.getElementById("root"))
//ReactDOM.render(<MyComponentWithModel></MyComponentWithModel>,document.getElementById("root"))
ReactDOM.render(
<div>
<MyHeader msg1="This is passed to the component" msg2="This is second message"></MyHeader>
<MyComponentWithModel></MyComponentWithModel>
<MyComponentWithBody>The inner text</MyComponentWithBody>
</div>,
document.getElementById("root"))
