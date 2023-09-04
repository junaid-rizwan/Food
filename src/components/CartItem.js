import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartItems=[];

function CartItem({name,imgSrc,price ,itemId}) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
        console.log(qty);
      }
    }
  };


  return (
   <div className="cartItem">
    <div className="imgBox">
      <img src={imgSrc} alt="" />
    </div>
    <div className="itemSection">
      <h2 className="itemName">{name}</h2>
      <div className="itemQyt">
        <span>x {qty}</span>
        <div className="Quantity">
          <RemoveRounded className='ItemRemove' onClick={()=>updateQty('remove',
          itemId)}/>

          <AddRounded className='ItemAdd'
          onClick={()=>updateQty('add',
          itemId)}/>
        </div>
      </div>

    </div>
    <p className="itemPrice">
      <span className="Dolor">$ </span>
      <span className="itemPriceValue">{itemPrice}</span>
    </p>
   </div>
  )
}

export default CartItem
