import React from 'react'
import ReactDOM  from 'react-dom'
import { useState } from 'react'
import {Main} from './components/Main'
import Header from './components/Header'
import './css/Base.css'


function TodoApp(props){
    const [formVisibility, setFormVisibility] = useState(false);
    console.log(formVisibility)
    return( 
    <div className="container">
        <Header show={setFormVisibility} />
        <Main show={setFormVisibility} visibility={formVisibility} />
    </div>);
}


ReactDOM.render(<TodoApp />,document.querySelector("#root"))