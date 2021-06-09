import {useParams,useHistory} from "react-dom"
export function Details(){
    let params = useParams();
    let history = useHistory();
    function goBack(){
        
    }
    return(
        <div>
            <h1>Car Details : {params.id}</h1>
        </div>
    )
}