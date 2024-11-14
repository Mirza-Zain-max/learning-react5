import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row, Button, Input, Form, message} from 'antd'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Login = () => {

    const [state, steState] = useState({ email: "", password: "" })

   

    const handleChange = e => steState({ ...state, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();

        let {  email, password } = state

        if (!window.isEmail(email)) { return message.error("Please Enter Your Email Correct") }
        if (password.length < 8) { return message.error("Password Does Not Match") }
        const user = { email, password }
        console.log('user', user)
    }
    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <Container>
                <div className="card p-3 p-md-4 p-lg-4">
                    <Form layout="vertical">
                        <h1 className='mb-4 text-center'>
                            <i>
                                Login
                            </i>
                        </h1>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Email" required>
                                    <Input type='email' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password" required>
                                    <Input.Password placeholder='Enter Your Password' name='password' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type='primary' htmlType='submit' onClick={handleSubmit} className='w-100'>Login</Button>
                                <Link to='/auth/forgot' className=' my-2 d-flex justify-content-center align-items-center  nav-link'>Forgot Password</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </main>
    )
}

export default Login