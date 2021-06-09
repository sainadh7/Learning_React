import { createRef } from "react"

export function CompA(props){
    let cref = createRef();
    return(
        <div>
            <h1>CompA : {props.msg}</h1>
            <hr/>
            <input type="text" ref={cref}></input>
            <button onClick={()=> props.send(cref.current.value)}>Send</button>
        </div>
    );
}