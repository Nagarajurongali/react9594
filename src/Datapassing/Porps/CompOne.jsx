import React, { useState } from 'react'
import CompTwo from './CompTwo'

function CompOne() {
    const [count , setCount] = useState(0)
    
  return (
    <div className='border p-4'>
        CompOne
        
        <button onClick={()=>setCount(count+1)}>add cart</button>
        <CompTwo value={count} />
    </div>
  )
}

export default CompOne