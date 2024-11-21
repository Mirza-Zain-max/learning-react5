import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from '../../Assets/Group.png'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Fade } from 'react-awesome-reveal'


const Hero = () => {
    return (
        <main style={{marginTop:"100px"}}>
            <Fade cascade damping={1}>
                <Container className='d-flex   justify-content-center  align-items-center my-5' style={{ animationDelay: '0ms' }}>
                    <Row className='bg-primary rounded-5'>
                        <Col sm={12} md={12} lg={6}>
                            <h1 className=" ms-md-3 display-sm-6 mt-md-2 display-3 fw-bolder text-center text-lg-start text-black">Buy your <br /> dream plants</h1>
                            <Col >
                                <h3 className='ms-3 fs-3'>
                                    50+ <span className='' style={{ marginLeft: "150px" }}>100+</span>
                                    <br /> <span className='fs-3'>Plant Species | Customers </span>
                                </h3>
                            </Col>
                            <Row className="row mb-3">
                                <Col xs={12} md={6} lg={8} className=" ">
                                    <div style={{ position: "relative" }}>
                                        <Input type="text" className="form-control py-3 " placeholder="What are you looking for?" />
                                        <div className='d-flex justify-content-center align-items-center' style={{ position: "absolute", top: "0", right: "12px", bottom: 0 }}>
                                            <Button className="btn btn-primary" style={{ height: "40px" }} type="button">
                                                <SearchOutlined />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <img src={group} alt="group" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </main>
    )
}
export default Hero