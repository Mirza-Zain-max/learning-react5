import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from '../../Assets/Group.png'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
// import { Fade } from 'react-awesome-reveal'


const Hero = () => {
    return (
        <>
            <Container className='d-flex justify-content-center  align-items-center my-5' style={{ animationDelay: '0ms' }}>
                <Row className='bg-primary rounded-5'>
                    <Col sm={12} md={12} lg={6}>
                        <h1 className=" ms-md-3 mt-md-2 display-3 fw-bolder text-center text-lg-start text-black">Buy your <br /> dream plants</h1>
                        <Col >
                            <h3 className='ms-3 fs-3'>
                                50+ <span className='' style={{ marginLeft: "150px" }}>100+</span>
                                <br /> <span className='fs-3'>Plant Species | Customers </span>
                            </h3>
                        </Col>
                        <Row className="row">
                            <Col xs={6}  md={12} lg={8} className=" mb-3 w-75 p-sm-3 " style={{ position: "relative" }}>
                                <Input type="text" className="form-control mt-2  ms-sm-3 mx-md-2 py-3 " placeholder="What are you looking for?" />
                                <Button className="btn btn-primary " style={{ position: "absolute", top: "27px", right: "12px", height: "50px" }} type="button">
                                    <SearchOutlined />
                                </Button>
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