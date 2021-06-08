import React from "react";

export function SignIn(){
    let un = React.createRef();
    let pwd = React.createRef();
    function login()
    {
        alert("Username: " + un.current.value + "\nPassword: " + pwd.current.value)
    }
    return(
        <div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" ref={un}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" ref={pwd}></input>
            </div>
            <div>
                <button onClick={login}>Sign In</button>
            </div>
        </div>
    );
}
