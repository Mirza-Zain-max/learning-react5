import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import { Image, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import frame from "../../Assets/Frame.png"
import frame2 from "../../Assets/Frame2.png"
import frame3 from "../../Assets/Frame3.png"
import { Link } from 'react-router-dom'

const CardSection = () => {
    const { Title } = Typography
    return (
        <Fade cascade damping={0.3}>
            <Container>
                <Title level={2} className='text-center'>
                    Plants
                </Title>
            </Container>
            <Container className='d-flex justify-content-start flex-wrap align-items-start gap-3'>
                <Row className=' d-flex justify-content-center  align-items-center'>
                    <Col sm={6} md={8} lg={10} className='my-5'>
                        <Title level={2} className='fw-bolder'>
                            Best Selling Plants
                        </Title>
                        <p>
                            Easiest way to healthy life by buying your favorite plants
                        </p>
                        <Link type='primary' className='btn btn-danger' to='/pages/about-us'>
                            Search <ArrowRightOutlined  />
                        </Link>
                    </Col>
                </Row>
                <Row className='p-1'>
                    <Col sm={3} md={6} lg={12}>
                        <Image
                            width={240}
                            src={frame} />
                    </Col>
                </Row>
                <Row className='p-1'>
                    <Col sm={3} md={6} lg={12}>
                        <Image
                            width={240}
                            src={frame2} />
                    </Col>
                </Row>
                <Row className='p-1'>
                    <Col sm={3} md={6} lg={12}>
                        <Image
                            width={240}
                            src={frame3} />
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}
export default CardSection