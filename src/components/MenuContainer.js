import React from 'react'

function MenuContainer({link,icon}) {
  return (
    <div>
      <li><a href={link}>
        <span className='Icon'> {icon}</span></a></li>
    </div>
  )
}

export default MenuContainer
