import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

//components
import home from './home'
import admin from './admin'
import user from './user'

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <header> Welcome<br/>
                    <NavLink to="/a"
                    activeClassName = "selected"
                    activeStyle = {{ color: 'red'}}
                    >Home</NavLink><br/>
                    <NavLink to={{
                        pathname : '/admin',
                        hash : '#dfxc54bcbnvmnbm',
                        search : ''
                    }}
                    activeClassName = "selected"
                    activeStyle = {{ color: 'red'}}
                    >admin</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path='/admin' component={admin} />
                    <Route path='/user/:username' component={user} />
                    <Route path='/' component={home} />
                </Switch>
                
                
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));

