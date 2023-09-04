import React from 'react'

function Debbitcard() {
  return (
   <div className="cardgroup">
    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266" alt="" className='cardLogo' />
    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c" alt="" className='cardchip' />
    <div className="cardnum"> 1234 5678 0987 4657</div>
    <div className="cardName">Junaid</div>
    <div className="cardFrom">10/21</div>
    <div className="cardTo">10/25</div>
    <div className="cardRing"></div>
   </div>
  )
}

export default Debbitcard
