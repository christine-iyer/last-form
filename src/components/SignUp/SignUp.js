import {Form, Button, Row, Col} from 'react-bootstrap'

export default function SignUp ({
     credentials,
     signUp,
     handleChangeAuth
   }) {
     return (
       <>
       <Form
                                        style={{ width: '78rem' }}
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            signUp()
                                        }}>
                                        <Row>
                                            <h2>SignUp</h2>
                                            <Col>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        onChange={handleChangeAuth}
                                                        value={credentials.email}
                                                        name='email'
                                                        type='text'
                                                        placeholder='Enter your Email'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>

                                                <Form.Group controlId='formBasicName'>
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        onChange={handleChangeAuth}
                                                        value={credentials.name}
                                                        name='name'
                                                        type='text'
                                                        placeholder='Enter your Name'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId='formBasicPassword'>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control onChange={handleChangeAuth}
                                                        value={credentials.password}
                                                        name='password'
                                                        type='text'
                                                        placeholder='Enter your Email' />
                                                </Form.Group>
                                            </Col>
                                        </Row>


                                        <Button variant='success' type='submit'>Submit
                                        </Button>
                                    </Form>
       
         
       </>
     )
   }