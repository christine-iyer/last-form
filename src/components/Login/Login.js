import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Login ({
     login,
     credentials,
     handleChangeAuth
   }) {
     return (
       <>
         <Form
                                        style={{ width: '38rem' }}
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            login()
                                        }}>
                                        <h2>Login</h2>
                                        <Row>
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
                                                <Form.Group controlId='formBasicPassword'>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control onChange={handleChangeAuth}
                                                        value={credentials.password}
                                                        name='password'
                                                        type='text'
                                                        placeholder='Enter your Password' />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button variant='success' type='submit'>Submit
                                        </Button>
                                    </Form>
       </>
     )
   }

 