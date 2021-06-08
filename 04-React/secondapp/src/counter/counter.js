import React from "react";

export class Counter extends React.Component {
    //let [counter,setCounter] = React.useState(0);
    constructor(){
        super();
        this.state = {counter : 0};
        console.log("Constructor..!")
    }
    //Life-Cycle Methods
    componentDidMount(){
        console.log("ComponentDidmount");
    }
    // componentDidUpdate(){
    //     //Whenever there is a change of state
    //     console.log("ComponentDidUpdate");
    // }
    componentDidUpdate(prop,prevstate){
        //Whenever there is a change of state
        console.log("ComponentDidUpdate : " + prevstate.counter);
    }
    shouldComponentUpdate(){
        // if(this.state.counter > 5)
        //     return true;
        // else 
        //     return false;
        //return false;
        return true;
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
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