import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from '../../Assets/Group.png'
import { SearchOutlined } from '@ant-design/icons'
// import { Fade } from 'react-awesome-reveal'


const Hero = () => {
    return (
        <>
            <Container className='d-flex justify-content-center  align-items-center my-5' style={{ animationDelay: '0ms' }}>
                <Row className='bg-primary rounded-5'>
                    <Col sm={12} md={12} lg={6}>
                        <h1 class=" ms-md-3 mt-md-2 display-3 fw-bolder text-center text-lg-start text-black">Buy your <br /> dream plants</h1>
                        <Col >
                            <h3 className='ms-3 fs-3'>
                                50+ <span className='' style={{ marginLeft: "150px" }}>100+</span>
                                <br /> <span className='fs-3'>Plant Species | Customers </span>
                            </h3>
                        </Col>
                        <Row className="row">
                            <Col sm={6} md={12} lg={8} class=" mb-3 w-75 p-sm-3 " style={{ position: "relative" }}>
                                <input type="text" class="form-control mt-2  ms-sm-3 ms-md-2` py-3 " placeholder="What are you looking for?" />
                                <button class="btn btn-primary " style={{ position: "absolute", top: "12px", right: "12px", height: "50px" }} type="button">
                                    <SearchOutlined />
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <img src={group} alt="group" className='img-fluid' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Hero