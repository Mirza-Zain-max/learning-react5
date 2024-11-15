import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row, Button, Input, Form, message } from 'antd'
import {auth} from '../../Config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from 'Components/Config/firebase'


// const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const Register = () => {
    const initialState = { fullName: "", email: "", password: "", confirmPassword: "", }

    const [state, setState] = useState(initialState)

    const [isProcessing, setIsProcessing] = useState(false)

    // const [fullName, setFullName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();

        let { fullName, email, password, confirmPassword } = state
        fullName = fullName.trim()

        if (fullName.length < 3) { return message.error("Please Enter Your Name Correct") }
        // if (!window.isEmail(email)) { return message.error("Please Enter Your Email Correct") }
        if (password.length < 8) { return message.error("Password Must be atleast 8 Chars.") }
        if (confirmPassword !== password) { return message.error("Password does't match.") }

        const userData = { uid: "", fullName, email, password, confirmPassword }
        console.log('userData', userData)

        setIsProcessing(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user =userCredential.user;
            console.log('user', user)
            message.success("User is Successfully  Register ",user)
            createDoucment({...userData , uid:user.uid})
        })
        .catch((error) => {
            message.error("Account Is AlReady Register",error)
            setIsProcessing(false)
        });
    createDoucment(userData)
    }
    const createDoucment = userData => {
        console.log('userData', userData)
        setTimeout(() => {
            setIsProcessing(false)
        }, 2000)
    }

    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <Container>
                <div className="card p-3 p-md-4 p-lg-4">
                    <Form layout="vertical">
                        <h1 className='mb-4 text-center'>
                            <i>
                                Register
                            </i>
                        </h1>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="FullName" required>
                                    <Input type='text' placeholder='Enter Your First Name' name='fullName' onChange={handleChange} />
                                </Form.Item>
                            </Col>
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
                                <Form.Item label="ConfirmPassword" required>
                                    <Input.Password placeholder='Enter Your Confirm Password' name='confirmPassword' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type='primary' htmlType='submit' onClick={handleSubmit} className='w-100' loading={isProcessing} >Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </main>
    )
}

export default Register