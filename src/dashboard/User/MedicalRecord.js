import React from 'react'
import UserSidebar from './UserSidebar'
import doctor from '../../assets/img/doctors/doctor-01.jpg'

export default function MedicalRecord() {
  return (
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <UserSidebar/>
                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card">
                            <div class="card-body pt-0">
                                <div class="tab-content pt-0">
                                      <div id="pat_medical_records">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>ID</th>
																	<th>Date </th>
																	<th>Description</th>
																	<th>Attachment</th>
																	<th>Created</th>
																	<th></th>
																</tr>     
															</thead>
															<tbody>
																<tr>
																	<td><a href="javascript:void(0);">#MR-0010</a></td>
																	<td>14 Nov 2019</td>
																	<td>Dental Filling</td>
																	<td><a href="#">dental-test.pdf</a></td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
																		</h2>
																	</td>
																	
																</tr>
															    <tr>
																	<td><a href="javascript:void(0);">#MR-0009</a></td>
																	<td>13 Nov 2019</td>
																	<td>Teeth Cleaning</td>
																	<td><a href="#">dental-test.pdf</a></td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                                                            <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																		</h2>
																	</td>
																	
																</tr>
																<tr>
																	<td><a href="javascript:void(0);">#MR-0008</a></td>
																	<td>12 Nov 2019</td>
																	<td>General Checkup</td>
																	<td><a href="#">cardio-test.pdf</a></td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                                                            <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
																		</h2>
																	</td>
																	
																</tr>
															
																
																
															</tbody>  	
														</table>
													</div>
												</div>
											</div>
										</div>          
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     </div>
  )
}
