import React from 'react'
import patient from '../../assets/img/patients/patient3.jpg'
import { Link } from 'react-router-dom'

export default function UserSidebar() {
  return (
    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
			<div class="profile-sidebar">
				<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="#" class="booking-doc-img">
											<img src={patient} alt="DocImage"/>
										</a>
										<div class="profile-det-info">
											<h3>Richard Wilson</h3>
											<div class="patient-details">
												<h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li>
												<Link to="/userDashboard">
													<i class="fas fa-columns"></i>
													<span>Dashboard</span>
												</Link>
											</li>
                                            <li>
												<Link to="/favourites">
													<i class="fas fa-bookmark"></i>
													<span>Favourites</span>
												</Link>
											</li>
										
											<li>
												<Link to="/medicalRecord">
                                                   <i class="fas fa-calendar-check"></i>
													<span>Medical Record</span>
												</Link>
											</li>
											<li>
												<Link to="/billing">
                                                   <i class="fas fa-calendar-check"></i>
													<span>Billing</span>
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
