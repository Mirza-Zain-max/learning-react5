import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Col, Row, Input, Form, message} from 'antd'
// import { Link } from 'react-router-dom'


const Frogot = () => {

    const [state, steState] = useState({ email: "" })

   

    const handleChange = e => steState({ ...state, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();

        let {  email } = state

        if (!window.isEmail(email)) { return message.error("Please Enter Your Email Correct") }
        const user = { email }
        console.log('user', user)
    }
    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <Container>
                <div className="card p-3 p-md-4 p-lg-4">
                    <Form layout="vertical">
                        <h1 className='mb-4 text-center'>
                            <i>
                                Frogot
                            </i>
                        </h1>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Email" required>
                                    <Input type='email' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button  htmlType='submit' onClick={handleSubmit} className='w-100 bg-danger text-light'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </main>
    )
}

export default Frogot