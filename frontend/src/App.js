import React from 'react';
import {
    BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import LoginPage from './auth/login'
import RegisterPage from './auth/register';

function Homepage (){
    let Login = <LoginPage />
    let Register = <RegisterPage />
    return (
        <div>
            <Router>
                <Link to="/"></Link>
                <Link to="/login"></Link>
                <Link to="/register"></Link>
                <Switch>
                    <Route path="/login">
                        {Login}
                    </Route>
                    <Route path="/register">
                        {Register}
                    </Route>
                </Switch>
            </Router>
            <h2>
            <a href='/login'>login</a>
            <a href='/register'>register</a>
            </h2>
        </div>
    )
}

function App() {
    return (
    <div className="App">
        <Homepage />
    </div>
    );
}


export default App;
