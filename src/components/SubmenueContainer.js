import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function SubmenueContainer({name}) {
  return (
        <div className="sunmenueContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>View All</p>
                <i><ChevronRightRounded/></i>
            </div>

        </div>
  )
}

export default SubmenueContainer
