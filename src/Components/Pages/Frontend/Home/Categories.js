import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import { Button, Card, Image, Typography } from 'antd'
import frame7 from '../../Assets/Frame7.png'
import frame8 from '../../Assets/Frame8.png'
import frame9 from '../../Assets/Frame9.png'
import { ArrowRightOutlined } from '@ant-design/icons'

const Categories = () => {
    const { Title, Paragraph } = Typography
    return (
        <main>
            <Container className=' mt-5  pb-3'>
                <div >
                    <Row className=" d-flex justify-content-center   align-items-center ">
                        <Col>
                            <Title level={2} className=' d-flex justify-content-center   align-items-center' >Categories</Title>
                            <Paragraph className=' d-flex justify-content-center   align-items-center'>Find what you are looking for</Paragraph>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Fade cascade damping={0.3} className='bg-primary'>
                <Container className='d-flex justify-content-center flex-wrap  align-items-center my-5' style={{ animationDelay: '0ms' }}>
                    <Row className='d-flex justify-content-center  align-items-center'>
                        <Col xs={24} md={8} lg={4}>
                            <Card className='bg-primary border-0 mb-5 d-flex justify-content-center align-items-center'>
                                <Image src={frame7} alt="Frame 4" className='img-fluid d-flex justify-content-center align-items-center' />
                            </Card>
                        </Col>
                        <Col xs={24} md={8} lg={4}>
                            <Card className='bg-primary border-0 mt-sm-5 mt-md-5 d-flex justify-content-center align-items-center'>
                                <Image src={frame9} alt="Frame 4" className='img-fluid d-flex justify-content-center align-items-center' />
                            </Card>
                        </Col>
                        <Col xs={24} md={8} lg={4}>
                            <Card className='bg-primary border-0 mb-5 d-flex justify-content-center align-items-center'>
                                <Image src={frame8} alt="Frame 4" className='img-fluid d-flex justify-content-center align-items-center' />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <Button type='primary' className='bg-danger mb-3 d-flex justify-content-center align-items-center'>
                                Explore <ArrowRightOutlined />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </main >
    )
}
export default Categories