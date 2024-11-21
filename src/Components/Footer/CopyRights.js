import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {  Typography } from 'antd'


const CopyRights = () => {
  const year = new Date().getFullYear()
  const { Title, Paragraph } = Typography
  return (
    <>
      <div className='bg-primary '>
        <Container className='d-flex justify-content-center align-items-center'>
          <Row>
            <Col xs={24} md={12} lg={12}  className='p-2 text-light'>
                <Paragraph className='d-flex justify-content-center mt-2 align-items-center'><i>{year} all Right Reserved Term of use GREENMIND</i></Paragraph>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default CopyRights