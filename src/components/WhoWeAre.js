import React from 'react'
import './../App.css'
import { Link } from 'react-router-dom'

function WhoWeAre() {
    const style = {
        color: '#FF6600'
    }
    return (
        <main>
            <div id="WWA-wrapper">
                <div id='about-div1'>
                    <h3>About</h3>
                    <p >
                        <Link to='/'>
                            Home
                        </Link>
                     &lt; <span className="fontColor">About</span> 
                  </p>
                </div>
                <div id='about-div2'>
                    <h2>Who We Are</h2>
                    <div className="seperator"></div>
                    <p>CourierPlus is a leading logistics and distribution services company established in 2009. We offer a wide array of express courier and logistic support solutions to our various customers.

                    With over 400 highly skilled personnel, we have excellent competencies in striving sectors such as Financial Services, Manufacturing, Telecommunications, Government Agencies, and Oil & Gas/Utilities. As a diverse end-to-end logistics solutions provider, we offer a range of expertise aimed at helping customers re-engineer and re-invent their businesses to compete successfully in an ever-changing marketplace, with the final objective of safely and promptly delivering all our customers consignments as expected.

                    CourierPlus Services Limited was recently acquired by <span className="fontColor">Superflux International Limited </span>in 2012. Since the acquisition, we have upgraded our offerings and deliverables to our esteemed customers using the most efficient and up to date infrastructure.</p>
                    <p>Important Links</p>
                    <ul>
                        <li>
                            <Link style={style}>
                                WWW.Superfluxnigeria.com
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id='about-div3'>
                    <h3>Our Vision, Mission & Core Values</h3>
                    <div className="seperator left-align"></div>
                    <h3>Our Vision</h3>
                    <p>To achieve leadership in the African courier and logistics market.</p>
                    <h3>Our Mission</h3>
                    <p>To be the reference point of excellence for African Courier and Logistics services by creating solutions that enable businesses and individuals identify their value drivers while blending with ultramodern technologies</p>
                    <h3>Our Core Values</h3>
                    <p>Our values guide how we behave. It is reflected in how we work and in our relationships with others. Our brand values are:</p>
                    <li>Customer Centricity: 
                        The customer is at the centre of all our activities and business decisions. Everything we do is guided by what the customer needs.</li>
                        <li>Innovation: <br />We are not afraid to try the unusual and we are always exploring new ideas and methods for meeting our customers’ needs.</li>
                        <li>Dynamism:<br />We are flexible and are always ready to change our strategies for the best results</li>
                        <li>Integrity:<br />Our customers trust us with their most valuable items, our integrity ensures we deliver what we said we will at the agreed time.</li>
                        <li>Community:<br />We make connections through our daily activities, people are at the centre of our activities hence we believe in creating communities.</li>
                        <li>Excellence:<br />We understand the importance of exceptional work. We are not only efficient but effective. Our customers can trust us with hardwork delivered in an outstanding way at all times.</li>
                </div>
            </div>
        </main>
    )

}

export default WhoWeAre