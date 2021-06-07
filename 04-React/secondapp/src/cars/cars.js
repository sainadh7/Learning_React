import { Cars } from "./store"

export function GetCars(){
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
            {Cars.map((car,index)=>{ 
                return(
                <tr key={"car_" + index}>
                    <td key={"id_" + index}>{car.id}</td>
                    <td key={"make_" + index}>{car.make}</td>
                    <td key={"price_" + index}>{car.price}</td>
                </tr> 
                    )
                }
            )}
        </tbody>
        </table>
        </div>
    )
}