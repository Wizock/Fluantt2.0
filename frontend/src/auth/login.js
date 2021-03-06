import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
const axios = require("axios");

function LoginPage(){
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    const token = sessionStorage.getItem('token')
    
    const handleSubmit = () => {
        axios(
            {
            method:'POST',
            'url': 'http://127.0.0.1:5000/token',
            data: JSON.stringify({
                'username': username,
                'password':password,
            }),
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            'Access-Control-Allow-Origin':'*', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    .then(response => {
        alert(JSON.stringify(response.data.access_token))
        console.log(response.data.access_token)
        sessionStorage.setItem('token', response.data.access_token);
    })}
    return (
        <div>
        {(token && token !== "" && token !== undefined) ? "you are logged in with this token: "+ token : (
            <div style={{background: '#2b42d4',paddingTop: '10vh',height: '100vh'}}>
                <div>
                    <div>
                        <header className="Login-header"></header>
                    </div>
                    <Card style={{width: '85vw',marginLeft: 'auto',marginRight: 'auto',}}>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>
                                Login
                            </Card.Title>
                            <div>
                                <div>
                                    <Form onSubmit={handleSubmit} id='form'>
                                        <div>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control id='username' type="text" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" id='password' placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" onClick={() => {
                                                        setUsername(document.getElementById('username').value);
                                                        setPassword(document.getElementById('password').value)}}>
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            )}
        </div>
    )
}

export default LoginPage