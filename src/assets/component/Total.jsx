import { useContext } from "react"
import { PriceContext } from "../../App";

const Total=()=>{
    const {price}=useContext(PriceContext);
    return(
        <div>

    <span>
        <span>TOTAL:</span>
        <span className="float-end">${price}</span>
    </span>
</div>
    )
}
export default Total