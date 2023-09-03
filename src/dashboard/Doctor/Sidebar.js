import React from 'react'
import { Link } from 'react-router-dom'
import doctor from '../../assets/img/doctors/doctor-02.jpg'

export default function Sidebar() {
  return (
        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
			<div class="profile-sidebar">
				<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="#" class="booking-doc-img">
											<img src={doctor} alt="DocImage"/>
										</a>
										<div class="profile-det-info">
											<h3>Dr. Darren Elder</h3>
											
											<div class="patient-details">
												<h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											
											<li>
												<Link to="/doctorDashboard">
													<i class="fas fa-calendar-check"></i>
													<span>Appointments</span>
												</Link>
											</li>
											<li>
												<Link to="/mypatients">
													<i class="fas fa-user-injured"></i>
													<span>My Patients</span>
												</Link>
											</li>
											
											<li>
												<Link to="#">
													<i class="fas fa-star"></i>
													<span>Reviews</span>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i class="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</Link>
											</li>
								</ul>
						</nav>
					</div>
				</div>				
		</div>
  )
}
