import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
const axios = require("axios");


// let postRequest = 

function postTest(username, password){

    console.log(`you posted with ${username} ${password} `)
    return axios(
            {
            method:'POST',
            'url': 'https://127.0.0.1:5000/posttest',
            data: {
                'username': username,
                'password':password,
            },
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            'Access-Control-Allow-Origin':'*', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
}

function LoginPage(props){
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    const handleSubmit = () => {
        console.log('you posted')
        postTest(username, password)
        alert(`you posted with ${username} ${password} `)
    }
    return (
        <div style={{
            background: '#2b42d4',
            paddingTop: '10vh',
            height: '100vh'}} className="Login">

            <header className="Login-header">
                <Card style={{
                    width: '85vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>Login</Card.Title>
                        <Card.Text>
                            <Form onSubmit={handleSubmit} id='form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control id='username' type="text" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={() => {
                                            setUsername(document.getElementById('username').value);
                                            setPassword(document.getElementById('password').value)}}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </header>
        </div>
    )
}

export default LoginPage