import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { render } from 'react-dom';

export default class Navbar extends Component {
    state = {
        isOpen:false
    }
    handelToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    };

    render () {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-hader">
                        <Link to="/"><img src={logo} alt="Beach Resort"></img></Link>
                        <button type="button" className="nav-btn" onClick={this.handelToggle}><FaAlignRight class="nav-icon"/></button>
                    </div>
                </div>
                
            </nav>
        );
    }
}
