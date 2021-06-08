import React from "react";

export function SignIn(){
    let un = React.createRef();
    let pwd = React.createRef();
    //let msg = "-----------------";
    //State management:
    let [msg,setmsg] = React.useState("-------------"); //hook

    // React.useEffect(()=>{
    //     console.log("use efffect did mount");
    // })
    React.useEffect(()=>{
        console.log("use efffect did mount");
    },[]);

    React.useEffect(()=>{
        console.log("use efffect did update");
    },[msg]);
    // React.useEffect(()=>{
    //     console.log("use efffect did update");
    // })
    
    React.useEffect(()=>{
        //if we return a method, it will remove m
        return () => {
            console.log("use effect unmount");
        }
    },[]);
    
    function login()
    {
        if(un.current.value === "batman" && pwd.current.value === "password!"){
            //msg = "Welcome Bruce Wayne..!";
            setmsg("Welcome Bruce Wayne..!");
        }
        else{
            //msg = "You still need to earn it..!"
            setmsg("You still need to earn it..!");
        }
        //alert("Username: " + un.current.value + "\nPassword: " + pwd.current.value)
        console.log(msg);
        //alert(msg);
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
            <p>{msg}</p>
        </div>
    );
}
