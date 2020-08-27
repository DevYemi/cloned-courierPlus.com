import React from 'react'
import './../App.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div id='header-wrapper'>
                <p> <a href='#'>COVID-19 UPDATE </a></p>
                <div id='FlexHeader'>
                    <a href={Header}><img src='/images/courier-logo.png' alt="courier logo" /></a>
                    <nav>
                        <ul id="nav-link">
                            <Link to='/'>
                                <li className='nav-links'><a href='#'>HOME</a></li>
                            </Link>
                            <li className='nav-links'><a href='#'>ABOUT US </a>



                                <ul>
                                    <Link to="/AboutUs">
                                        <li className='sub-nav-links'><a href='#'>Who We Are</a></li>
                                    </Link>
                                    <li className='sub-nav-links'><a href='#'>Manaagement Team</a></li>
                                </ul>
                            </li>
                            <li className='nav-links'><a href='#'>SERVICES</a>
                                <ul>
                                    <li className='sub-nav-links'><a href='#'>Domestic Services</a></li>
                                    <li className='sub-nav-links'><a href='#'>International Services</a></li>
                                    <li className='sub-nav-links'><a href='#'>Custom Business Solutions</a></li>
                                    <li className='sub-nav-links'><a href='#'>Mailroom Management & Warehousing</a></li>
                                    <li className='sub-nav-links'><a href='#'>Ecommerce Delivery: Local & International</a></li>
                                </ul>
                            </li>
                            <li className='nav-links'><a href='#'>FRANCHISE</a></li>
                            <li className='nav-links'><a href='#'>CONTACT</a></li>
                            <li className='nav-links'><a href='#'>USEFUL LINKS</a>
                                <ul>
                                    <li className='sub-nav-links'><a href='#'>International Tracking</a></li>
                                    <li className='sub-nav-links'><a href='#'>FAQ</a></li><br />
                                    <li className='sub-nav-links'><a href='#'>Updates</a></li>
                                    <li className='sub-nav-links'><a href='#'>Become An Agent</a></li>
                                    <li className='sub-nav-links'><a href='#'>Get Quote</a></li>
                                </ul>
                            </li>
                            <li className='nav-links'><a href='#'>OPEN ACCOUNT</a></li>
                            <li className='nav-links'><a href='#'>CAREER</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header