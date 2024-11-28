import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import frame10 from '../../Assets/Frame10.png'
import { Col, Row, Typography} from 'antd';
import { Fade } from 'react-awesome-reveal';

const {Title} = Typography
const Customer = () => (
    <main>
      <Fade>
      <Container>
            <Row>
                <Col xs={24} md={12} lg={8}>
                <Title level={2} className='fw-bolder pb-5 '>What customers say about
                GREEMIND?</Title>
                </Col>
            </Row>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='mb-5'>
                            <img src={frame10} className='w-100 d-flex justify-content-center align-items-center' /></Col>
                    </Row>
                   
                </Carousel.Item>
                <Carousel.Item>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='mb-5'>
                            <img src={frame10} className='w-100 d-flex justify-content-center align-items-center' /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='mb-5'>
                            <img src={frame10} className='w-100 d-flex justify-content-center align-items-center' /></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
      </Fade>

    </main>
);

export default Customer;