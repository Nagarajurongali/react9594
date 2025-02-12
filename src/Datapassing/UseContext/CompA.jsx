import React, { createContext } from 'react'
import CompC from './CompC'

export const useContext = createContext()
function CompA() {
    let name = "Ramesh"
  return (
    <div className='border p-4'>
        CompA
        <useContext.Provider value={name}>
        <CompC />
        </useContext.Provider>
    </div>
  )
}

export default CompA