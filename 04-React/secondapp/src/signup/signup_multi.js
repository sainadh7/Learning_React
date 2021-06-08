import { useState } from "react";

export function SignUp(){

    let [user,setUser] = useState({fname:'',email:'',pwd:'',cell:''});

    function register(){
        alert("Registered user: " + JSON.stringify(user));
    }
    function fnameChange(e){
       // alert("fnameChange: " + e.target.value + ":" + e.target.name);
       setUser({...user,fname:e.target.value});
    }
    function emailChange(e){
        //alert("emailChange: " + e.target + ":" + e.target.name);
        setUser({...user,email:e.target.value});
    }
    function pwdChange(e){
        //alert("pwdChange: " + e.target + ":" + e.target.name);
        setUser({...user,pwd:e.target.value});
    }
    function cellChange(e){
        // alert("CellChange: " + e.target + ":" + e.target.name);
        setUser({...user,cell:e.target.value});
    }

    return(
        <div>
            <div class>
                <label>Full Name:</label>
                <input type="text" name="fname" onChange={fnameChange}></input>
                <label>E-mail</label>
                <input type="text" name="email" onChange={emailChange}></input>
                <label>Password</label>
                <input type="password" name="pwd" onChange={pwdChange}></input>
                <label>Cell#</label>
                <input type="text" name="cell" onChange={cellChange}></input>
            </div>
            <div>
                <button onClick={register}>SignUp</button>
            </div>
        </div>
    );
}