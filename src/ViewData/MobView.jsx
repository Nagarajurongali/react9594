import React, { useState } from 'react'
import { Mobiles } from '../Data/MobileData'
import { Row, Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
function MobView() {
    console.log(Mobiles)
    return (
        <div className='container-fluid'>
            <Row>
                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10}>
                    <div className='d-flex flex-wrap justify-content-around'>
                        {
                            Mobiles.map((e) => (
                                <div className='border p-4 '>
                                    <p>{e.id}</p>
                                    <p>{e.Brand}</p>
                                    <p>{e.Model}</p>
                                    <p>{e.Price}</p>
                                </div>
                            ))
                        }

                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default MobView