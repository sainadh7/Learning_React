export function CompB(props){
    return(
        <div>
            <h1>CompB : {props.msg}</h1>
            <h1>From parent: {props.send}</h1>
        </div>
    );
}