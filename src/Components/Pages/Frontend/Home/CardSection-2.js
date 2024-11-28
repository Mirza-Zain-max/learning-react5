import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import { Card, Typography } from 'antd'
import frame4 from '../../Assets/Frame4.png'
import frame5 from '../../Assets/Frame5.png'
import frame6 from '../../Assets/Frame6.png'

const CardSection2 = () => {
    const { Title } = Typography
    return (
        <Fade cascade damping={0.3}>
            <Container className='d-flex justify-content-center flex-wrap align-items-center my-5' style={{ animationDelay: '0ms' }}>
                <Row className=' d-flex justify-content-center  align-items-center'>
                    <Col className='my-5'>
                        <Title level={2} className='d-flex justify-content-center  align-items-center'>About Us</Title>
                    </Col>
                    <>
                        <Row className='d-flex justify-content-center  align-items-center'>
                            <Col xs={24} md={12} lg={4}>
                                <Card className='card-hover my-2 d-flex justify-content-center  align-items-center'>
                                    <img src={frame4} alt="Frame 4" className='img-fluid d-flex justify-content-center  align-items-center' />
                                </Card>
                            </Col>
                            <Col xs={24} md={12} lg={4}>
                                <Card className='card-hover my-2 d-flex justify-content-center  align-items-center'>
                                    <img src={frame5} alt="Frame 4" className='img-fluid d-flex justify-content-center  align-items-center' />
                                </Card>
                            </Col>
                            <Col xs={24} md={12} lg={4}>
                                <Card className='card-hover my-2 d-flex justify-content-center  align-items-center'>
                                    <img src={frame6} alt="Frame 4" className='img-fluid d-flex justify-content-center  align-items-center' />
                                </Card>
                            </Col>
                        </Row>
                    </>
                </Row>
            </Container>
        </Fade>
    )
}
export default CardSection2