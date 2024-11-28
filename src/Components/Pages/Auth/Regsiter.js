import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row, Button, Input, Form, message } from 'antd'
import { auth, fireStore } from '../../Config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import {  doc, setDoc } from 'firebase/firestore'
// import { auth } from 'Components/Config/firebase'


// const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const Register = () => {
    const initialState = { fullName: "", email: "", password: "", confirmPassword: "", }

    const [state, dispatch] = useState(initialState)

    const [isProcessing, setIsProcessing] = useState(false)

    // const [fullName, setFullName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const handleChange = e => dispatch({ ...state, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();
        
        let { fullName, email, password, confirmPassword } = state
        fullName = fullName.trim()

        if (fullName.length < 3) { return message.error("Please Enter Your Name Correct") }
        // if (isEmail(email)) { return message.error("Please Enter Your Email Correct") }
        if (password.length < 8) { return message.error("Password Must be atleast 8 Chars.") }
        if (confirmPassword !== password) { return message.error("Password does't match.") }
        
        const userData = { uid: "", fullName, email, password, confirmPassword }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                const user = userCredential.user;
                message.success("User is Successfully  Register ")
                localStorage.setItem('user-login', true)
                localStorage.setItem('user-uid', user.uid)
                createDoucment({ ...userData, uid: user.uid })
            })
            .catch((error) => {
                message.error("Account Is AlReady Register", error)
            })

            createDoucment(userData)
    }

                const createDoucment = async (userData) => {
                    const user ={...userData}
                    try {
                        // const docRef = await addDoc(collection(fireStore, "users"),userData);
                        await setDoc(doc(fireStore, "user", user.uid),user)
                        // console.log("Document written with ID: ", docRef.id);
                        message.success("user added successfully")
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    } finally {
                     setIsProcessing(false)   
                    }
                }
    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <Fade cascade damping={0.1}>
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
                                    <Button type='primary' htmlType='submit' onClick={handleSubmit} className='w-100' loading={isProcessing}  >Register</Button>
                                </Col>
                                <Col span={12} className='mt-2'>
                                    <p>
                                        Is Account  Already Register?
                                    </p>
                                </Col>
                                <Col span={12}>
                                    <Link to='/auth/login' className=' mt-2 btn text-center nav-link'>Login</Link>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </Fade>
        </main>
    )
}

export default Register