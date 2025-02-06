import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import DataFetching from './DataFetching'

function New() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
              <DataFetching />
            </Col>
        </Row>
    </div>
  )
}

export default New