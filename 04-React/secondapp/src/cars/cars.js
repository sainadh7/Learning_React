import { useState } from "react"
import { Cars } from "./store"

export function GetCars(){

    let newCar = {id:'',make:'',price:''};
    let [cars,addCar] = useState([...Cars]);
    
    function fieldChange(e){
       newCar[e.target.name] = e.target.value;
    }
    function addNewCar(){
        console.log([...cars, newCar])
        addCar([...cars, newCar] );
        //Reset the local variable
       // newCar = {id:'',make:'',price:''};
    }
    return(
        <div>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {cars.map((car,index)=>{ 
                return(
                <tr key={"car_" + index}>
                    <td key={"id_" + index}>{car.id}</td>
                    <td key={"make_" + index}>{car.make}</td>
                    <td key={"price_" + index}>{car.price}</td>
                </tr> 
                    )
                }
            )}
            <tr>
                <td><input onChange={fieldChange} name="id" type="text"></input></td>
                <td><input onChange={fieldChange} name="make" type="text"></input></td>
                <td><input onChange={fieldChange} name="price" type="text"></input></td>
            </tr>
            <tr>
                <td colSpan="3">
                    <button onClick={addNewCar}>Add New Car</button>
                </td>
            </tr>
            
        </tbody>
        </table>
        </div>
    )
}