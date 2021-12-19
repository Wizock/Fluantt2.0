import React from 'react';
import {
    BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import LoginPage from './auth/login'
import RegisterPage from './auth/register';
import Check from './auth/nsj';

function Homepage (){
    let Login = <LoginPage />
    let Register = <RegisterPage />
    let check = <Check />
    // let textboxElement = <TextBox />
    return (
        <div>
            <Router>
                <Link to="/"></Link>
                <Link to="/login"></Link>
                <Link to="/register"></Link>
                <Link to="/TextTesting"></Link>
                <Switch>
                    <Route path="/login">
                        {Login}
                    </Route>
                    <Route path="/register">
                        {Register}
                    </Route>
                    <Route path="/test">
                        {check}
                    </Route>
                    {/* <Route path="/TextTesting">
                        {textboxElement}
                    </Route> */}
                    
                </Switch>
            </Router>
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
