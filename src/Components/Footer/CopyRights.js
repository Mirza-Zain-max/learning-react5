import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const year = new Date().getFullYear()
const CopyRights = () => {
  return (
    <>
    <div className='bg-primary'>
    <Container className='d-flex justify-content-center t-1 align-items-center'>
        <Row>
            <Col className=' text-light  mb-0'>
            <p>&copy; {year}. All Right Reversed. </p>

            </Col>
        </Row>
    </Container>
    </div>

    </>
  )
}

export default CopyRights