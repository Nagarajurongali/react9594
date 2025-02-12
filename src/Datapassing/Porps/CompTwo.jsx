import React from 'react'
import CompThree from './CompThree'

function CompTwo(props) {
    return (
        <div className='border p-4'>
            CompTwo
            
            <CompThree value={props.value} />
        </div>
    )
}

export default CompTwo