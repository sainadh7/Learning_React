import { useState } from 'react';
import {CompA} from './compA'
import {CompB} from './compB'


export function Parent(){
    let [data,setData] = useState('');
    function sendB(txt){
        // alert(txt);
        setData(txt);
     }
    return(
        <div>
            <h1>Parent</h1>
            <CompA msg="Hii CompA..!" send={sendB}></CompA>
            <hr/><hr/>
            <CompB msg="Hii CompB..!" send={data}></CompB>

        </div>
    );
}