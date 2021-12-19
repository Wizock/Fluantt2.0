import {React, useEffect} from 'react';

export default class ReactHooksEventListenerDemo {
    constructor(){
        super(this)
    }
     state = {
        x:0,
        y:0
    }
    
    componentDidMount() {
        window.addEventListener('mouseMove', this.mouseMove);
    }
    componentWillUnmount() {
        window.removeEventListener('mouseMove', this.mouseMove);
    }
    mouseMoveEvent = (e) => {
        console.log(e)
    }
}