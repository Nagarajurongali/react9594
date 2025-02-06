import React from 'react'
import { Mobiles } from '../Data/MobileData'
import { Link } from 'react-router-dom'
function MobComp() {
    let MobSlice = Mobiles.slice(0,4)
    return (
        <div>
        <div className='d-flex flex-wrap justify-content-around'>
            {
                MobSlice.map((e) => (
                    <div className='border p-4 '>
                        <p>{e.id}</p>
                        <p>{e.Brand}</p>
                        <p>{e.Model}</p>
                        <p>{e.Price}</p>
                    </div>
                ))
            }

        </div>
        <Link to='/mobiles'><p>View all</p></Link> 
        </div>
    )
}

export default MobComp