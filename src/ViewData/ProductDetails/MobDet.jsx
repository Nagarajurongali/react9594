import React from 'react'
import { Mobiles } from '../../Data/MobileData'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MobDet() {
    const { id } = useParams();
    let productDetails = Mobiles.find((e) => e.id === Number(id));

    const addCart = ()=>{
        const productData = document.querySelectorAll('p');
        let singleData = Array.from(productData).map((ele)=>ele.innerText
        )
        console.log(singleData)
    }



    return (
        <div className='container-fluid align-items-center ' style={{height:'100vh'}}>
            <Link to='/mobiles'><h3>back</h3></Link>
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