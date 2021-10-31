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
        alert(email.toString(),username.toString(), password.toString(),firstname.toString(),lastname.toString())
        postRegister(email.toString(),username.toString(), password.toString(),firstname.toString(),lastname.toString())
    }
    return (
        <div>
            <div style={{background: '#2b42d4',paddingTop: '10vh',height: '100vh'}} className="Login">
                <header className="Login-header"></header>
                    <Card style={{width: '85vw',marginLeft: 'auto',marginRight: 'auto',}}>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>Register</Card.Title>
                            
                                <Form onSubmit={handleSubmit} id='form'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control id='email' type="text" placeholder="Enter email" />
                                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" id='username' placeholder="username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" id='password' placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" id='firstname' placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" id='lastname' placeholder="Last Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center',}}>
                                        <Button style={{display: 'flex', justifyContent:'center', alignItems:'center',width:"50%"}} width = '45%' variant="primary" type="submit" onClick={
                                            () => {
                                                setEmail(document.getElementById('email').value);
                                                setUsername(document.getElementById('username').value);
                                                setPassword(document.getElementById('password').value);
                                                setFirstname(document.getElementById('firstname').value);
                                                setLastname(document.getElementById('lastname').value);
                                                }
                                            }>
                                            Submit
                                        </Button><br></br>
                                    </div>
                                        <h5 style={{display: 'flex', justifyContent:'center', alignItems:'center',}}> 
                                            If You Have An Account, 
                                            <a href='/login'>
                                                Please Login
                                            </a>
                                        </h5>
                                </Form>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    )
}

export default RegisterPage