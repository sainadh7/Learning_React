import React from "react";

export function Contacts(){
    let title = "Contacts";
    let [list,addtoList] = React.useState(["Arjun","Madhav","Krishna"]);
    console.log(list);
    let item = React.createRef();
    function addItem(){
        list = list.push(item)
        addtoList(list);
    }
    return(
        <div>
            <h3>{title}</h3>
            <input type="text" ref={item}></input>
            <button onClick={addItem}>Add</button>
            <ol>
                {list.map((c,index)=>{ return <li key={index}>{c}</li>})}
            </ol>
        </div>
    );
}