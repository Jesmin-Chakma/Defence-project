import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer class="footer">
            {/* <!-- Footer Top --> */}
            <div class="footer-top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                        
                            {/* <!-- Footer Widget --> */}
                            <div class="footer-widget footer-about">
                                <div class="footer-logo">
                                    <h1>Health Trust</h1>
                                </div>
                                <div class="footer-about-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <div class="social-icon">
                                        <ul>
                                            <li>
                                                <Link to="#" ><i class="fab fa-facebook-f"></i> </Link>
                                            </li>
                                            <li>
                                                <Link to="#" ><i class="fab fa-twitter"></i> </Link>
                                            </li>
                                            <li>
                                                <Link to="#" ><i class="fab fa-linkedin-in"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#" ><i class="fab fa-instagram"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#" ><i class="fab fa-dribbble"></i> </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Footer Widget --> */}
                            
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                        
                            {/* <!-- Footer Widget --> */}
                            <div class="footer-widget footer-menu">
                                <h2 class="footer-title">For Patients</h2>
                                <ul>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Search for Doctors</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Login</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Register</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Booking</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Patient Dashboard</Link></li>
                                </ul>
                            </div>
                            {/* <!-- /Footer Widget --> */}
                            
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                        
                            {/* <!-- Footer Widget --> */}
                            <div class="footer-widget footer-menu">
                                <h2 class="footer-title">For Doctors</h2>
                                <ul>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Appointments</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Login</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Register</Link></li>
                                    <li><Link to="#"><i class="fas fa-angle-double-right"></i> Doctor Dashboard</Link></li>
                                </ul>
                            </div>
                            {/* <!-- /Footer Widget --> */}
                            
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                        
                            {/* <!-- Footer Widget --> */}
                            <div class="footer-widget footer-contact">
                                <h2 class="footer-title">Contact Us</h2>
                                <div class="footer-contact-info">
                                    <div class="footer-address">
                                        <span><i class="fas fa-map-marker-alt"></i></span>
                                        <p> 941 Shewrapara,<br/> Dhaka , Bangladesh</p>
                                    </div>
                                    <p>
                                        <i class="fas fa-phone-alt"></i>
                                        +1 315 369 5943
                                    </p>
                                    <p class="mb-0">
                                        <i class="fas fa-envelope"></i>
                                        xyzclinic@example.com
                                    </p>
                                </div>
                            </div>
                            {/* <!-- /Footer Widget --> */}
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!-- /Footer Top --> */}
        </footer>
  )
}
