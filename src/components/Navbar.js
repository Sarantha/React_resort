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
        this.setState({isOpen:!this.state.isOpen});
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-hader">
                        <Link to="/"><img src={logo} alt="Beach Resort"></img></Link>
                        <button type="button" style={{float:'right',paddingTop:'8px'}} className="nav-btn" onClick={this.handelToggle}><FaAlignRight class="nav-icon"/></button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

