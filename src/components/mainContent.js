import React from 'react'
import './../App.css'
import gsap from './../../node_modules/gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            details: [
                {
                    h2: 'We Deliver an Experience',
                    p: `Timely Delivery is of great importance to us. We have over
                400 skilled personnel and over 100 delivery vehicles all around
                Nigeria to ensure you package is delivered on time and in great condition.`
                },
                {
                    h2: 'Patronize Us Plss',
                    p: `Satan Deceive All`
                },
                {
                    h2: 'Customer Care services',
                    p: `God Bless All`
                }
            ]
        }
        this.updateDetails = this.updateDetails.bind(this)

    }
    updateDetails() {
        if (this.state.index === 2) {
            console.log('called')
            this.setState({
                index: 0
            })
        } else if (this.state.index >= 0) {
            console.log('called inside')
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    componentDidMount() {
        // PROTOTYPE CODE VERSION OF THE CAROUSEL (GSAP)
        function wait(update) {
            gsap.delayedCall(10, () => {
                carousel.play();

            })
        }
        var carousel = gsap.timeline({
            repeat: -1,
            yoyo: true,
            duration: 1,
        })

        carousel.from('h2.sec1-div1-content', {
            x: -400,
        })
            .from('p.sec1-div1-content', {
                rotation: '37_short',
                top: '148%',
                onComplete: this.updateDetails

            })
            .addPause('>', wait)
        // FADE IN AND SLIDE IN DIV2 (GSAP)
        gsap.registerPlugin(ScrollTrigger);
        let fadeSlideIn = gsap.timeline({
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: '.sec2-divs',
                // markers: true,
                toggleActions: 'play none none reverse',
            }
        })
        fadeSlideIn.from(['#sec2-div2', '#sec2-div3'], {
            opacity: 0
        })
            .from('#sec2-div1', {
                ease: "bounce",
                x: '-100%',
            })
            .from('#sec2-div4', {
                ease: "bounce",
                x: '100%',
            }, '<')
        //   CRAWL IN THE DIV3
        let crawlIn = gsap.timeline({
            duration: 2,
            ease: "power1",
            scrollTrigger: {
                trigger: '.sec3-divs',
                markers: true,
                toggleActions: 'play none none reverse',
            }
        })
        crawlIn.from('#sec3-div1', {
            x: '450%',
            start: "top top",
            end: "bottom bottom",
            rotation: 90
        })
            .from('#sec3-div2', {
                x: '350%',
                start: "top top",
                end: "bottom bottom",
                rotation: 90
            })
            .from('#sec3-div3', {
                x: '250%',
                start: "top top",
                end: "bottom bottom",
                rotation: 90
            })
            .from('#sec3-div4', {
                x: '150%',
                start: "top top",
                end: "bottom bottom",
                rotation: 90
            })

        // BACK TO TOP BUTTON
        gsap.from('.top', {
            display: 'none',
            duration: 0.1,
            scrollTrigger: {
                trigger: '#sec3-div5',
                // markers: true,
                start: 'top center',
                end: 'bottom+=400 bottom',
                toggleActions: 'play none none reverse'
            }
        })
    }




    render() {
        let { details, index } = this.state
        console.log(' render called')
        return (
            <main>
                <div id="main-wrapper">
                    <section id="section1" className="sections">
                        <div id="sec1-div1" className="sec1-bg">
                            <h2 className="sec1-div1-content">{details[index].h2}</h2>
                            <p className="sec1-div1-content">{details[index].p}
                            </p>
                        </div>
                        <div id="bg-color">
                            <div id="sec1-div2">
                                <p>Track Your Shipment</p>
                                <p className="sec1-bg"></p>

                            </div>
                            <div id="sec1-div3">
                                <form>
                                    <p>For Domestic and International Import Shipment Tracking</p>
                                    <input type="text" placeholder='Enter Tracking Number' style={{ height: '20px', maxWidth: '100%' }} /> <input type='submit' value='Track1' style={{ padding: '5px' }}></input>
                                    <p>Alternative link to track Shipment</p>
                                    <input type="text" placeholder="Enter Tracking Number" style={{ height: '20px', maxWidth: '100%' }} /> <input type='submit' value='Track1' style={{ padding: '5px' }}></input>
                                </form>
                            </div>
                        </div>

                    </section>
                    <section id='section2' className='sections'>
                        <div id="sec2-div">
                            <a href="#">Get Quote</a>
                            <div id='color'></div>
                        </div>
                        <h2>Our Services
                        <div className="seperator"></div>
                        </h2>
                        <div className="sec2-flex">
                            <div id="sec2-div1" className="sec2-divs">
                                <div className="sec2-div-img">
                                    <img src="/images/PRE-COOLING-VAN-FOR-FROZEN-FOODS-300x300.jpg" alt="cooling van"></img>
                                </div>
                                <div className="sec2-div-content">
                                    <h3>Domestic Services</h3>
                                    <p id="p">We Deliver On The Next Business Day, Time Sensitive Documents And Parcels Around The 47 Counties In Nigeria.
                            We offer same day service to the major cities in Nigeria, Nairobi, Mombasa and Kisumu. We arrange to pick up your shipment before 1000hrs, we ensure it is delivered to cities mentioned above on the same day before close of busine</p>
                                    <a hre="#">Read More </a>
                                </div>

                            </div>
                            <div id="sec2-div2" className="sec2-divs">
                                <div className="sec2-div-img">
                                    <img src="/images/aroundtheword-768x768.jpg" alt="cooling van"></img>
                                </div>
                                <div className="sec2-div-content">
                                    <h3>Import Service</h3>
                                    <p>We Use Our International Network Partners To Collect Shipments From Over 200 Countries Worldwide Door-To-Door. This Can Be Done Via Express, Value Express Or Airfreight Services Based On The Weight Restrictions And Cost…</p>
                                    <a hre="#">Read More </a>
                                </div>

                            </div>
                            <div id="sec2-div3" className="sec2-divs">
                                <div className="sec2-div-img">
                                    <img src="/images/Courier-plus-AD3-600x600.jpg" alt="custom solution"></img>
                                </div>
                                <div className="sec2-div-content">
                                    <h3>Custom Business Solutions</h3>
                                    <p>Our Experience In Creating “Complete” Logistics Systems Gives Us Considerable Flexibility In How We Work With You. Whether We Focus On Your Entire Supply Chain Or Smaller Elements Within It, We Can Add Measurable Efficiency And Cost Savings To Your Business Processes.</p>
                                    <a hre="#">Read More </a>
                                </div>

                            </div>
                            <div id="sec2-div4" className="sec2-divs">
                                <div className="sec2-div-img">
                                    <img src="/images/Warehouse-527x527.png" alt="warehouse"></img>
                                </div>
                                <div className="sec2-div-content">
                                    <h3>Mailroom Management & Warehousing</h3>
                                    <p>Professional And Economic Handling Of Your Mailroom And Courier Service Requirements. We Provide Dedicated Resources, With Various Flexibilities In Pick-Up And Delivery Of Internal And External Office Documents And Parcels</p>
                                    <a hre="#">Read More </a>
                                </div>

                            </div>
                        </div>


                    </section>
                    <section id="section3" className="sections" >
                        <div id="sec3-flex">
                            <div id="sec3-div1" className='sec3-divs'>
                                <div className='sec3-wrap'>
                                    <div className="sec3-div-img">
                                        <img src="/images/News441x294.jpg" alt="News"></img>
                                    </div>
                                    <div className="sec3-div-content">
                                        <h3>News & Blog</h3>
                                        <p>Review Our Latest Press Releases, News And Blog Updates.</p>
                                        <a hre="#">Read More </a>
                                    </div>
                                </div>

                            </div>
                            <div id="sec3-div2" className='sec3-divs'>
                                <div className='sec3-wrap'>
                                    <div className="sec3-div-img">
                                        <img src="/images/Industrial441x294.jpg" alt="Industrial"></img>
                                    </div>
                                    <div className="sec3-div-content">
                                        <h3>Industry Experts</h3>
                                        <p>With Experienced Skilled Personnel, We Have Excellent Competencies In Striving Sectors Such As Financial Services, Manufacturing, Telecommunications, Government Agencies, Tea Industry And Apparel Industry.</p>
                                        <a hre="#">Read More </a>
                                    </div>
                                </div>

                            </div>
                            <div id="sec3-div3" className='sec3-divs'>
                                <div className='sec3-wrap'>
                                    <div className="sec3-div-img">
                                        <img src="/images/BusSol441x294.jpg" alt="Business Solution"></img>
                                    </div>
                                    <div className="sec3-div-content">
                                        <h3>Business Solutions</h3>
                                        <p>Our Experience In Creating “Complete” Logistics Systems Gives Us Considerable Flexibility In How We Work With You. Whether We Focus On Your Entire Supply Chain Or Smaller Elements Within It, We Can Add Measurable Efficiency And Cost Savings To Your Business Processes.</p>
                                        <a hre="#">Read More </a>
                                    </div>
                                </div>

                            </div>
                            <div id="sec3-div4" className='sec3-divs'>
                                <div className='sec3-wrap'>
                                    <div className="sec3-div-img">
                                        <img src="/images/Help441x294-1.png" alt="Customer Care"></img>
                                    </div>
                                    <div className="sec3-div-content">
                                        <h3>Dedicated Support</h3>
                                        <p>Any Questions? Get Great Online Tips And Advice From Our Contact Page Or Use Our Live Chat. We Will Be Sure To Respond To You</p>
                                        <a hre="#">Contact Us </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <a href="#"><div className='top'><img src="/images/top.png" alt="back to top" /></div> </a>
                        <div id='sec3-div5' className="sec3-divs sec3-div-content">

                            <h3>A Local Courier Service with a Global Reach
                            <div className="seperator"></div>
                            </h3>
                            <p>Lets Interact. Connect with us on our social media platforms</p>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default MainContent