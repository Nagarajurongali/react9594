
import { Mobiles } from '../Data/MobileData'
import { Row, Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import { Link } from 'react-router-dom'
function MobView() {
    console.log(Mobiles)
    return (
        <div className='container-fluid'>
            <Row>
                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10}>
                    <div className=' d-flex flex-wrap justify-content-around'>
                        {
                            Mobiles.map((e) => (
                                <Link to={`/mobiles/${e.id}`}>
                                    <div className='products border p-4 '>
                                        <img src={e.img} alt="" />
                                        <p>{e.id}</p>
                                        <p>{e.Brand}</p>
                                        <p>{e.Model}</p>
                                        <p>{e.Price}</p>
                                    </div>
                                </Link>
                                
                            ))
                        }

                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default MobView