import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Login() {
    return (

        <div className=''>
            <Row>
                <Col sm={6} >
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s'} alt="" />
                </Col>
                <Col sm={6} className='w-50 m-auto border p-3'>
                    <h2 className='text-center'>Login Page</h2>
                    <form>
                        <label htmlFor="">Enter your Email:</label>
                        <input type="text" className='form-control' /><br />
                        <label htmlFor="">Enter your password:</label>
                        <input type="password" className='form-control' /><br />
                        <small>Don't have an Account? <Link to='/signup'> Signup</Link></small>
                        <Link to='/dashboard'><button className='w-100 btn btn-primary'>Login</button></Link> 

                    </form>
                </Col>
            </Row>

        </div>
    )
}

export default Login