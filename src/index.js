import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'


//components
import home from './home'
import admin from './admin'

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <header> Welcome<br/>
                    <Link to="/">Home</Link><br/>
                    <Link to={{
                        pathname : '/admin',
                        hash : '#dfxc54bcbnvmnbm',
                        search : ''
                    }}>admin</Link><br/>
                    <hr/>
                </header>
                <Route path='/' exact component={home} />
                <Route path='/admin' exact component={admin} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));