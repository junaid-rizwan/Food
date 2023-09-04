import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import {Items} from './Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let CartData=[];
function ItemCard({imgSrc,name,price,ratings,itemId}) {
   const[isFavourite,setFavourite]=useState(false);
   const[currentValue,setCurrentValue]=useState(Math.floor(ratings));

   const[isCart,SetCart]=useState(null);
   const[{},dispatch]=useStateValue();


    useEffect(()=>{
        if(isCart){
            // console.log(isCart);
            CartData.push(isCart);
            // console.log(CartData);
            dispatch({
                type:actionType.SET_CART,
                cart:CartData,
                
            });
        }
    },[isCart])


   const handleClick=(value)=>{
    setCurrentValue(value);

   }

  return (
    <div className="itemCard" id={itemId}>
        <div className={`isFav ${isFavourite?'active':''}`} onClick={()=>setFavourite(!isFavourite)}>
            <Favorite/>
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt="" className='itemImg' />
        </div>
        <div className="ImgContent">
            <h3 className='itemName'>{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {
                        Array.apply(null,{length:5}).map((e,i)=>(
                            <i key={i} className={`rating ${currentValue>i?"orange":"grey"}`} onClick={()=>handleClick(i+1)}><StarRounded/></i>
                        ))
                    }
                    <div className="price"><span>$ </span>{price}</div>
                </div>
                <i className="addToCart" onClick={()=>{
                    SetCart(Items.find(n=>n.id===itemId ))
                }}>
                    <AddRounded/>
                </i>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
