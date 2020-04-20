import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'


import Landing from '../components/layout/Landing'
import NavBar from '../components/layout/Navbar'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Dashboard from '../components/layout/Dashboard'
class App extends React.Component{
    
    render(){
        return(
           <div className="container">
               <BrowserRouter>
               <div>
                <NavBar/>
                <Route exact path ="/" component={Landing}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard}/>
               </div>
               
               </BrowserRouter>
           </div>
        )
    }
}

export default connect(null, actions)(App);