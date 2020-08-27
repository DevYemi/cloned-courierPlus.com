import React from 'react'
import './../App.css'

function Footer() {
    return (
        <footer>
            <div id="footer-flex">
                <div className="F-divs">
                    <h3>
                        Services<div className='seperator'></div></h3>
                    <p>
                        <a href='#'>Domestic Services</a>
                        <a href='#'>International Services</a>
                        <a href='#'>Business Solutions</a>
                        <a href='#'>Mailroom & Warehousing</a>
                    </p>
                </div>

                <div className="F-divs">
                    <h3>
                        Helpful Links<div className='seperator'></div></h3>
                    <p>
                        <a href='#'>Services</a>
                        <a href='#'>FAQs</a>
                        <a href='#'>Contact</a>
                    </p>
                </div>

                <div className="F-divs">
                    <h3>
                        About Us<div className='seperator'></div></h3>
                    <p>
                        <a href='#'>Who we are</a>
                        <a href='#'>Management Team</a>
                    </p>
                </div>

                <div className="F-divs" style={{width:"53%"}}>
                    <h3>
                        Contact <div className='seperator'></div></h3>
                    <p>
                        <span> 42 Concord Way off Airport Road, Ikeja, Lagos, Nigeria.</span>
                        <a href='#'>info@courierplus-ng.com</a>
                        <a href='#'>enquiries@courierplus-ng.com</a><br />
                        <p> Phone::+234-700-CPLUSNG </p>
                        <p>Phone::+234-703-307-4129 </p>
                        <p>Phone::+234-703-178-7871 </p>


                    </p>
                </div>
            </div>

            <div id='F-bottom'>Copyright 2020, CourierPlus Services. All rights reserved</div>
        </footer>
    )

}

export default Footer