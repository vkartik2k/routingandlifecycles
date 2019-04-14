import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'


//components
import home from './home'
import admin from './admin'

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <header> This is my header block</header>
                <Route path='/' exact component={home} />
                <Route path='/admin' exact component={admin} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));