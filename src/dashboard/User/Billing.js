import React from 'react'
import UserSidebar from './UserSidebar'
import doctor from '../../assets/img/doctors/doctor-03.jpg'

export default function Billing() {
  return (
    <div class="content">
    <div class="container-fluid">
        <div class="row">
            <UserSidebar/>
                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="card">
                        <div class="card-body pt-0">
                            <div class="tab-content pt-0"> 
                            <div id="pat_billing" >
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Invoice No</th>
																	<th>Doctor</th>
																	<th>Amount</th>
																	<th>Paid On</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<a href="invoice-view.html">#INV-0010</a>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                                                            <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Ruby Perrin <span>Dental</span></a>
																		</h2>
																	</td>
																	<td>$450</td>
																	<td>14 Nov 2019</td>
																	
																</tr>
																<tr>
																	<td>
																		<a href="invoice-view.html">#INV-0009</a>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                                                            <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																		</h2>
																	</td>
																	<td>$300</td>
																	<td>13 Nov 2019</td>
																	
																</tr>
																<tr>
																	<td>
																		<a href="invoice-view.html">#INV-0008</a>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																			<img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
																			</a>
																			<a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
																		</h2>
																	</td>
																	<td>$150</td>
																	<td>12 Nov 2019</td>
																	
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
