import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
function Subtotal({id,title,image,price,rating}) {

  const [{basket}, dispatch]=useStateValue();
  

  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
          Subtotal ({basket.length} items): <strong>{price}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox"/>Thes order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
      <button> Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
