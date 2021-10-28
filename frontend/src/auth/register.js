import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
const axios = require("axios");

function postRegister(email,username, password,firstname,lastname){

    console.log(`you posted with ${username} ${password} `)
    return axios(
            {
            method:'POST',
            'url': 'https://127.0.0.1:5000/register',
            data: {
                'email':email,
                'username': username,
                'password':password,
                'firstname':firstname,
                'lastname':lastname,
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

function RegisterPage(props){
    const [email, setEmail] = useState(0);
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    const [firstname, setFirstname] = useState(0);
    const [lastname, setLastname] = useState(0);
    const handleSubmit = () => {
        console.log('you posted')
        postRegister(email,username, password,firstname,lastname)
    }
    return (
        <div style={{background: '#2b42d4',paddingTop: '10vh',height: '100vh'}} className="Login">
            <header className="Login-header">
                <Card style={{width: '85vw',marginLeft: 'auto',marginRight: 'auto',}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>Register</Card.Title>
                        <Card.Text>
                            <Form onSubmit={handleSubmit} id='form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control id='email' type="text" placeholder="Enter email" />
                                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" id='username' placeholder="username" />
                                    <Form.Text className="text-muted">
                                    This is the name other's will view your profile
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" id='firstname' placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" id='lastname' placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={() => {setEmail(document.getElementById('email').value);setUsername(document.getElementById('username').value);setPassword(document.getElementById('password').value);setFirstname(document.getElementById('firstname').value);setLastname(document.getElementById('lastname').value);}}>
                                    Submit
                                </Button>
                            </Form>
                            <Card.Text> If You Have An Account, <Card.Link href='/login'>Please Login</Card.Link></Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </header>
        </div>
    )
}

export default RegisterPage