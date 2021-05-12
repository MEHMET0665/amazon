import React from 'react'
import './Product.css'
function Product() {
  return (
    <div className="product">
     <div className="product_info">
     <p> The lean</p>    
       <p className="product_price">
         <small>$</small>
         <strong>19.99</strong>
       </p>
       <div className="product_rating">
         <p>⭐</p>
       </div>
       </div> 
       <img src="https://images-na.ssl-images-amazon.com/images/I/51EVETDOOeL._AC_UL160_SR160,160_.jpg" />
       <button>Add to Basket</button>
    </div>
  )
}

export default Product
