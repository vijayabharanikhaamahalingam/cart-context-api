import { createContext, useState } from "react"
import SubTotal from "./assets/component/Subtotal";

const PriceContext=createContext();
const App=() => {

  
  
  const calculateTotalPrice=(e)=>{
    setPrice(e.target.value*product.price)
  }

  
  const product=
      {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/iphone7-9.jpg?fit=600%2C764&ssl=1",
          images: [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ] 
      }
      const [price,setPrice]=useState(product.price);
  return (
    <div>
 

     <div className="card mb-3 ">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}
        <span className="float-end">
        <select className="me-3" name="quantity" id="quantity" onChange={calculateTotalPrice}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span className="card-title">${product.price}</span>
        </span>
        </h5>
        {/* <p className="card-text">{product.description}</p> */}
        <p className="card-text"><small className="text-muted">{product.description}</small></p>
        <PriceContext.Provider value={{price}}>
    <SubTotal/>
     </PriceContext.Provider> 
      </div>
    </div>
  </div>
</div>
     </div>
  )
}

export {App as default,PriceContext};