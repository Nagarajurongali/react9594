import React from 'react'
import { AcData } from '../Data/AcData'

function AcView() {
  return (
    <div>
        {
            AcData.map((e)=>(
                <div>
                    <p>{e.id}</p>
                    <p>{e.Name}</p>
                    <p>{e.Model}</p>
                    <p>{e.Price}</p>
                    <button>cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default AcView