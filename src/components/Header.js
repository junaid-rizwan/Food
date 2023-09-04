import React, { useEffect } from 'react'

import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';


import "../styles/headre.css"

function Header() {
  useEffect(()=>{
    const toggleMenu=document.querySelector('.toggleMenu');

    
    toggleMenu.addEventListener('click', () => {
      
      const rightMenu = document.querySelector('.rightMenu');
      
        rightMenu.classList.toggle('active');
      
    });
   
  },[])
  return (
    <div>
        <header>
      <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt=""  className='logo'/>
      <div className="inputBox">
        <SearchRounded className='secarchIcon'/>
        <input type="text" placeholder='Search' />
      </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className='cart'/>
            <div className="cart_content">
                
            </div>
        </div>


        <div className="profileContainer">
            <div className="imgbox">
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt=""  className='profilePic'/>
            </div>
            <h2 className="userName">Junaid</h2>
        </div>

        <div className="toggleMenu">
            <BarChart className='toggleIcon'/>
        </div>
      
      </header>
    </div>
  )
}

export default Header
