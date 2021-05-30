import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
//import './bootstrap.css'
function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>

                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Email</Form.Label>

                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Email</Form.Label>

                            <Form.Control type="password" ref={passwordConfRef} required />
                        </Form.Group>
                        <Button className="w-100 " type="submit" > Sign Up </Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Already have a account ? Log In
            </div>
        </>
    )
}

export default SignUp
