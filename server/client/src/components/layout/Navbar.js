import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/" 
                            style={{fontFamily:"monospace"}}
                            className="col s5 brand-logo center black-text">
                            Eternal Space
                            <i className="large material-icons">star_border</i>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;