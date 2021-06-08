import React, { Component } from "react";

export class SignIn extends React.Component{
     un = React.createRef();
     pwd = React.createRef();
     //msg = "-----------------";
    //State management:
    //let [msg,setmsg] = React.useState("-------------"); //hook
    state = {msg:"--------------"};
    login = () =>{
        if(this.un.current.value === "batman" && this.pwd.current.value === "password!"){
            this.setState({msg:"Welcome Bruce Wayne..!"});
            //this.msg = "Welcome Bruce Wayne..!";
            //setmsg("Welcome Bruce Wayne..!");
        }
        else{
            this.setState({msg:"You still need to earn it..!"});
            //this.msg = "You still need to earn it..!"
            //setmsg("You still need to earn it..!");
        }
        //alert("Username: " + un.current.value + "\nPassword: " + pwd.current.value)
        //console.log(msg);
        //alert(this.state.msg);
    }
    render(){
    return(
        <div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" ref={this.un}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" ref={this.pwd}></input>
            </div>
            <div>
                <button onClick={this.login}>Sign In</button>
            </div>
            <p>{this.state.msg}</p>
        </div>
    );
    };
}
