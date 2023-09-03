import React from 'react'
import UserSidebar from './UserSidebar'
import doctor from '../../assets/img/doctors/doctor-04.jpg'

export default function User() {
  return (
    <div class="content">
    <div class="container-fluid">
            <div class="row">
               <UserSidebar/>
               <div class="col-md-7 col-lg-8 col-xl-9">
                  <div class="card">
                      <div class="card-body pt-0">
                      <div class="tab-content pt-0">
										
                    
                      <div id="pat_appointments" class="tab-pane fade show active">
                        <div class="card card-table mb-0">
                          <div class="card-body">
                            <div class="table-responsive">
                              <table class="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                          <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
                                        </a>
                                        <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                      </h2>
                                    </td>
                                    <td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                    <td>12 Nov 2019</td>
                                    <td>$160</td>
                                    <td>16 Nov 2019</td>
                                    <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                    
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
                                        </a>
                                        <a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
                                      </h2>
                                    </td>
                                    <td>12 Nov 2019 <span class="d-block text-info">8.00 PM</span></td>
                                    <td>12 Nov 2019</td>
                                    <td>$250</td>
                                    <td>14 Nov 2019</td>
                                    <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                  
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
                                        </a>
                                        <a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
                                      </h2>
                                    </td>
                                    <td>11 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                    <td>10 Nov 2019</td>
                                    <td>$400</td>
                                    <td>13 Nov 2019</td>
                                    <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
                                    
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src={doctor} alt="UserImage"/>
                                        </a>
                                        <a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
                                      </h2>
                                    </td>
                                    <td>10 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
                                    <td>10 Nov 2019</td>
                                    <td>$350</td>
                                    <td>12 Nov 2019</td>
                                    <td><span class="badge badge-pill bg-warning-light">Pending</span></td>
                                    
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
