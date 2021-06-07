export function Contacts(){
    let title = "Contacts";
    let list = ["Arjun","Madhav","Krishna"];
    return(
        <div>
            <h3>{title}</h3>
            <ol>
                {list.map((c,index)=>{ return <li key={index}>{c}</li>})}
            </ol>
        </div>
    );
}