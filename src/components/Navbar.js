import React from 'react'
import { Link } from 'react-router-dom'
//Assets
import Logo from '../assets/logo.png'
import icMenu from '../assets/ic_menu.png'
//Style
import '../styles/navbar.scss'

function Navbar(props) {
    const active = props.active
    const center = props.center

    return (
        <div className={center ? "navbar-no-resp" : "navbar"}>
            {!center &&
                <div>
                    {/* Hidden menu */}
                    <div className="hidden-menu">
                        <div className="menu-icon">
                            <span>
                                <img src={icMenu} />
                            </span>
                        </div>

                        {/* Logo */}
                        <Link to="/">
                            <img src={Logo} />
                        </Link>
                    </div>
                </div>}
            {/* Navbar option */}
            <nav className={center ? "center" : "right"}>
                <ul>
                    <li><Link
                        to="/"
                        className={active && active === "home" ? "active" : ""}>
                        Home</Link></li>
                    <li><Link
                        className={active && active === "portfolio" ? "active" : ""}
                        to="/portfolio">
                        Portfolio</Link></li>
                    {/*<li><Link
                        className={active && active === "team" ? "active" : ""}
                        to="/team">
                    Team</Link></li>*/}
                    <li><Link
                        className={active && active === "contact" ? "active" : ""}
                        to="/contact">
                        Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar 