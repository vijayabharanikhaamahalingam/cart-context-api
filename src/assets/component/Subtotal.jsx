import { useContext } from "react";
import { PriceContext } from "../../App";
import Total from "./Total";
import "./Subtotal.css"

const SubTotal=()=>{
    const {price}=useContext(PriceContext);
    return (
<div>
    <hr />
    <span >
        <span>SUBTOTAL:</span>
        <span className="float-end" >${price}</span>
    </span>
    <p>
    <span>SHIPPING:</span>
    <span className="float-end"><b>FREE</b></span>    
    </p>
    <div className="footer-design card-footer">
    <Total/>
    </div>
   
</div>
    )
}
export default SubTotal;