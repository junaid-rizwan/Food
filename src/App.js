
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import MenuCard from './components/MenuCard';

import BannerName from './components/BannerName';
import SubmenueContainer from './components/SubmenueContainer'
import CartItem from './components/CartItem';
import {MenuItems,Items} from "./components/Data"

import { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';
import Debbitcard from './components/Debbitcard';
import { useStateValue } from './components/StateProvider';

function App() {







  const[isMainData,setMainData]=useState(Items.filter((element)=>element.itemId==='buger01'));

  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    const menuLi=document.querySelectorAll('#menu li');
   


    console.log(menuLi);
    function setMenuActive(){
      menuLi.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
    }
    menuLi.forEach(n=>n.addEventListener("click",setMenuActive))

    // menucard active toggle
    const menuCard=document.querySelector('.rowcontainer').querySelectorAll('.rowMenuCard');
    function setMenuCardactive(){
      // console.log('i');
      menuCard.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');

    }
    menuCard.forEach((n)=>n.addEventListener("click",setMenuCardactive))
  },[isMainData,cart,total,totalPrice])
//seta main dish items on filter
  const setData=(itemId)=>{
    setMainData(Items.filter((element)=>element.itemId===itemId))
  };

  return (
    <div className="App">
      <Header/>

      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"junaid"} discount={"20"} link={"#"}/>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="" className='deliveryPic' />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubmenueContainer name={"Menu Category"}/>
            </div>
            <div className="rowcontainer">

              {
                MenuItems && MenuItems.map(data=>(
              <div key={data.id} onClick={()=>setData(data.itemId)}>
                <MenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id===1?true:false} />
              </div>

                ))
              }
            </div>
            <div className="dishContainer">
              {
                isMainData && isMainData.map(data=>(
                  
                  <ItemCard key={data.id} 
                  itemId={data.id} imgSrc={data.imgSrc} name={data.name} price={data.price} ratings={data.ratings} />
                  ))
                }
              
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCradContainer">
            <div className="debitCard">
              <Debbitcard/>
            </div>
          </div>
          {
            !cart?(<div></div>):(
                  <div className="cartCheckoutContainer">
            <div className="cartContainer">
              <SubmenueContainer name-={"Cart Items"}/>
              <div className="cardItems">
              {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}

              </div>
            </div>
            <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
              </div>
            <button className="CheckOut">Check Out</button>
          </div>
            )
          }
        
        </div>


      </main>

      <div className="bottomMenu">
        <ul id='menu'>
          <MenuContainer link={"#"} icon={<HomeRounded/>} />
          <MenuContainer link={"#"} icon={<Chat/>} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded/>} />
          <MenuContainer link={"#"} icon={<Favorite/>} />
          <MenuContainer link={"#"} icon={<SummarizeRounded/>} />
          <MenuContainer link={"#"} icon={<Settings/>} />

          <div className="indicator"></div>

        </ul>
      </div>
    </div>
  );
}

export default App;
