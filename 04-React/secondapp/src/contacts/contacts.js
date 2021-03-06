import React from "react";

export function Contacts(){
    let title = "Contacts";
    let [list,addtoList] = React.useState(["Arjun","Madhav","Krishna"]);
    let item = React.createRef();
    //console.log(list);
    function addItem(){
        //console.log([...list,item.current.value]);
        //console.log(list.push(item.current.value));
        //list.push(item.current.value);
        //addtoList(list.slice(0,list.length));
        addtoList([...list,item.current.value]);
        
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