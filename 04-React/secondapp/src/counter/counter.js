import React from "react";

export class Counter extends React.Component {
    //let [counter,setCounter] = React.useState(0);
    state = {counter : 0};
    increment = () => {
        this.setState({counter : ++this.state.counter});
    }
    decrement = ()=>{
        this.setState({counter : --this.state.counter});
    }
    render(){
    return(
        <div>
            <h3>Counter: {this.state.counter}</h3>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <h2>Done using a class component </h2>
        </div>
        );
    }
}