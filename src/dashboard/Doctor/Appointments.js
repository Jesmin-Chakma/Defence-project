import React from 'react'
import patient from '../../assets/img/patients/patient.jpg'
import patient1 from '../../assets/img/patients/patient1.jpg'
import patient2 from '../../assets/img/patients/patient2.jpg'

export default function Appointments() {
  return (
    <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="appointments">

        <div class="appointment-list">
            <div class="profile-info-widget">
                <a href="patient-profile.html" class="booking-doc-img">
                <img src={patient} alt="UserImage"/>
                </a>
                <div class="profile-det-info">
                    <h3><a href="patient-profile.html">Richard Wilson</a></h3>
                    <div class="patient-details">
                        <h5><i class="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
                        <h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                        <h5><i class="fas fa-envelope"></i> richard@example.com</h5>
                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 923 782 4575</h5>
                    </div>
                </div>
            </div>
            <div class="appointment-action">
                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                    <i class="far fa-eye"></i> View
                </a>
                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                    <i class="fas fa-check"></i> Accept
                </a>
                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                    <i class="fas fa-times"></i> Cancel
                </a>
            </div>
        </div>

    

        <div class="appointment-list">
            <div class="profile-info-widget">
                <a href="patient-profile.html" class="booking-doc-img">
                <img src={patient1} alt="UserImage"/>
                </a>
                <div class="profile-det-info">
                    <h3><a href="patient-profile.html">Charlene Reed </a></h3>
                    <div class="patient-details">
                        <h5><i class="far fa-clock"></i> 12 Nov 2019, 5.00 PM</h5>
                        <h5><i class="fas fa-map-marker-alt"></i> North Carolina, United States</h5>
                        <h5><i class="fas fa-envelope"></i> charlenereed@example.com</h5>
                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 828 632 9170</h5>
                    </div>
                </div>
            </div>
            <div class="appointment-action">
                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                    <i class="far fa-eye"></i> View
                </a>
                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                    <i class="fas fa-check"></i> Accept
                </a>
                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                    <i class="fas fa-times"></i> Cancel
                </a>
            </div>
        </div>`
        
        <div class="appointment-list">
									<div class="profile-info-widget">
										<a href="patient-profile.html" class="booking-doc-img">
                                        <img src={patient2} alt="UserImage"/>
										</a>
										<div class="profile-det-info">
											<h3><a href="patient-profile.html">Gina Moore</a></h3>
											<div class="patient-details">
												<h5><i class="far fa-clock"></i> 8 Nov 2019, 3.00 PM</h5>
												<h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
												<h5><i class="fas fa-envelope"></i> ginamoore@example.com</h5>
												<h5 class="mb-0"><i class="fas fa-phone"></i> +1 954 820 7887</h5>
											</div>
										</div>
									</div>
									<div class="appointment-action">
										<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i class="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
											<i class="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
											<i class="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
						
								<div class="appointment-list">
									<div class="profile-info-widget">
										<a href="patient-profile.html" class="booking-doc-img">
                                           <img src={patient} alt="UserImage"/>
										</a>
										<div class="profile-det-info">
											<h3><a href="patient-profile.html">Elsie Gilley</a></h3>
											<div class="patient-details">
												<h5><i class="far fa-clock"></i> 6 Nov 2019, 9.00 AM</h5>
												<h5><i class="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
												<h5><i class="fas fa-envelope"></i> elsiegilley@example.com</h5>
												<h5 class="mb-0"><i class="fas fa-phone"></i> +1 315 384 4562</h5>
											</div>
										</div>
									</div>
									<div class="appointment-action">
										<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i class="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
											<i class="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
											<i class="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
							
								<div class="appointment-list">
									<div class="profile-info-widget">
										<a href="patient-profile.html" class="booking-doc-img">
                                           <img src={patient1} alt="UserImage"/>
										</a>
										<div class="profile-det-info">
											<h3><a href="patient-profile.html">Joan Gardner</a></h3>
											<div class="patient-details">
												<h5><i class="far fa-clock"></i> 5 Nov 2019, 12.00 PM</h5>
												<h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
												<h5><i class="fas fa-envelope"></i> joangardner@example.com</h5>
												<h5 class="mb-0"><i class="fas fa-phone"></i> +1 707 2202 603</h5>
											</div>
										</div>
									</div>
									<div class="appointment-action">
										<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i class="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
											<i class="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
											<i class="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>`
        </div>
    </div>
  )
}
