import { Mobiles } from '../../Data/MobileData'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../../Components/Cart';
function MobDet() {
    const { id } = useParams();
    let productDetails = Mobiles.find((e) => e.id === Number(id));
    
    const [cart , setCart] = useState([])
    const addCart = ()=>{
        const productData = document.querySelectorAll('p');
        let singleData = Array.from(productData).map((ele)=>ele.innerText
        )
        setCart(singleData)
        alert("Item Add to Cart Successfully")
    }

    localStorage.setItem('cartItem' , cart)




    return (
        <div className='container-fluid align-items-center ' style={{height:'100vh'}}>
            <Link to='/mobiles'><small>back</small></Link>
            <Cart />

            <Row className='border align-items-center '>
                <Col sm={6}>
                    <img src={productDetails.img} alt="" /></Col>
                <Col sm={6}>
                    <p>Product id :{productDetails.id}</p>
                    <p>Product Brand : {productDetails.Brand}</p>
                    <p>Product Model : {productDetails.Model}</p>
                    <p>Product Price : {productDetails.Price}</p>
                    <button className='btn btn-primary' onClick={addCart}>add cart</button>
                </Col>
            </Row>
            

        </div>
    )
}

export default MobDet