import React from 'react'
import { useContext } from './CompA'
function CompC() {
  return (
    <div className='border p-4'>
        CompC
        <useContext.Consumer>
            {value=><div>{value}</div>}
        </useContext.Consumer>

    </div>
  )
}

export default CompC