import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <Link to="/" class="navbar-brand logo">
                    <h1>Health Trust</h1>
                </Link>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="index-2.html" class="menu-logo">
                        <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
                    </a>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav ml-5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li class="has-submenu">
                        <Link to="/searchDoctor">Find Doctor</Link>
                    </li>	
                    <li class="has-submenu">
                        <Link to="/findAmbulance">Find Ambulance</Link>
                    </li>	
                    <li class="has-submenu">
                        <Link to="/diseasePrediction">Disease Prediction</Link>
                    </li>	
                    <li class="has-submenu">
                        <Link to="/userDashboard">Patient</Link>
                    </li>	
                    <li class="has-submenu">
                        <Link to="/doctorDashboard">Doctor</Link>
                    </li>	
                    <li class="login-link">
                        <Link to="/login">Login / Signup</Link>
                    </li>
                </ul>		 
            </div>		 
            <ul class="nav header-navbar-rht">
                <li class="nav-item contact-item">
                    <div class="header-contact-img">
                        <i class="far fa-hospital"></i>							
                    </div>
                    <div class="header-contact-detail">
                        <p class="contact-header">Contact</p>
                        <p class="contact-info-header"> +1 315 369 5943</p>
                    </div>
                </li>
                <li class="nav-item">
                    <Link class="nav-link header-login" to="/login">login / Signup </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
