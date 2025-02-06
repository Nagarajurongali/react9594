import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import MobComp from '../Components/MobComp'

function Dashboard() {
  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
        <Sidenav />
        </Col>
        <Col sm={10}>
          <h2>Mobiles</h2>
          <MobComp />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard