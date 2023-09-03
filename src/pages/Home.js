import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import doc from '../assets/img/doctors/doctor-01.jpg'
import feature from '../assets/img/features/feature-04.jpg'
import ambu from '../images/ambulance.jpg'
import ai from '../images/ai.jpg'

export default function Home() {
	const navigate=useNavigate()
	const handleSubmit=(e)=>{
		navigate('/searchDoctor')
	}
  return (
    <div class="main-wrapper">
        {/* <!-- Home Banner --> */}
			<section class="section section-search">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Search Doctor, Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
						</div>
                         
					
						<div class="search-box">
							<form onSubmit={handleSubmit}>
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Search Location" required/>
									<span class="form-text">Based on your Location</span>
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" required/>
									<span class="form-text">Ex : Dental or Sugar Check up etc</span>
								</div>
								<button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- /Home Banner --> */}

				  
			{/* <!-- Clinic and Specialities --> */}
			<section class="section section-specialities">
				<div class="container-fluid">
					<div class="section-header text-center">
						<h2>Other Services</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-3">
							<div class="specialities-slider slider">
							<div class="profile-widget">
									<div class="doc-img">
										<a href="doctor-profile.html">
										   <img class="img-fluid" alt="UserImage" src={ambu}/>
										</a>
									</div>

									<div class="pro-content">
										<div className='text-center p-3'>
										   <h2>Find Ambulance</h2>
										   <p>Find the best ambulance services in your city with affortable price.</p>
										</div>
										
										<div class="row row-sm">
											<div class="col">
												<Link to="/findAmbulance" class="btn book-btn">Find Now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="specialities-slider slider">
							<div class="profile-widget">
									<div class="doc-img">
										<a href="doctor-profile.html">
										   <img class="img-fluid" alt="UserImage" src={ai}/>
										</a>
									</div>

									<div class="pro-content">
										<div className='text-center p-3'>
										   <h2>Disease Prediction</h2>
										   <p>Ensure your disease by our AI assitant by sharing your disease symptom.</p>
										</div>
										
										<div class="row row-sm">
											<div class="col">
												<Link to="/diseasePrediction" class="btn book-btn">Predict Now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>   
			</section>	 
			{/* <!-- Clinic and Specialities --> */}
			<section className='featured-first'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={doc} alt='doctor' style={{width:'90%'}}/>
						</div>
						<div className='col-md-6'>
							<h1>Find the best doctor in your area</h1>
							<br/>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</section>

			<section className='featured-first' style={{backgroundColor:'white'}}>
				<div className='container'>
					<div className='row'>
					   <div className='col-md-6'>
							<h1>Get quality services in the City</h1>
							<br/>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className='col-md-6'>
							<img src={feature} alt='doctor' style={{width:'90%'}}/>
						</div>
						
					</div>
				</div>
			</section>
			

			{/* <!-- Availabe Features --> */}
    </div>
  )
}
