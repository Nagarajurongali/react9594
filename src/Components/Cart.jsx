import React from 'react'

function Cart() {
    document.querySelector('p').innerHTML = localStorage.getItem('cartItem')
    return (
    <div>
        <p>Cart</p>

    </div>
  )
}

export default Cart