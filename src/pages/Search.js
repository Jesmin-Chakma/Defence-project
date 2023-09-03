import React from 'react'
import doc from '../assets/img/doctors/doctor-thumb-01.jpg'
import doc2 from '../assets/img/doctors/doctor-thumb-03.jpg'
import doc3 from '../assets/img/doctors/doctor-thumb-04.jpg'
import { Link } from 'react-router-dom';

export default function Search() {

  const doctorWidgets = [
    {
      doctorName: "Dr. Ruby Perrin",
      doctorImage: doc,
      speciality: "MDS - Periodontology and Oral Implantology, BDS",
      department: "Dentist",
      rating: 4,
      location: "Florida, USA",
      services: ["Dental Fillings", "Whitening"],
    },
    {
      doctorName: "Dr. Darren Elder",
      doctorImage: doc2,
      speciality: "BDS, MDS - Oral & Maxillofacial Surgery",
      department: "Dentist",
      rating: 4,
      location: "Newyork, USA",
      services: ["Dental Fillings", "Whitening"],
    },
    {
      doctorName: "Dr. Deborah Angel",
      doctorImage: doc3,
      speciality: "MBBS, MD - General Medicine, DNB - Cardiology",
      department: "Cardiology",
      rating: 4,
      location: "Georgia, USA",
      services: ["Dental Fillings", "Whitening"],
    },
    {
      doctorName: "Dr. Sofia Brient",
      doctorImage: doc3,
      speciality: "MBBS, MS - General Surgery, MCh - Urology",
      department: "Urology",
      rating: 4,
      location: "Louisiana, USA",
      services: ["Dental Fillings", "Whitening"],
    },
    {
        doctorName: "Dr. Ruby Perrin",
        doctorImage: doc,
        speciality: "MDS - Periodontology and Oral Implantology, BDS",
        department: "Dentist",
        rating: 4,
        location: "Florida, USA",
        services: ["Dental Fillings", "Whitening"],
      },
      {
        doctorName: "Dr. Darren Elder",
        doctorImage: doc2,
        speciality: "BDS, MDS - Oral & Maxillofacial Surgery",
        department: "Dentist",
        rating: 4,
        location: "Newyork, USA",
        services: ["Dental Fillings", "Whitening"],
      },
      {
        doctorName: "Dr. Deborah Angel",
        doctorImage: doc3,
        speciality: "MBBS, MD - General Medicine, DNB - Cardiology",
        department: "Cardiology",
        rating: 4,
        location: "Georgia, USA",
        services: ["Dental Fillings", "Whitening"],
      },
      {
        doctorName: "Dr. Sofia Brient",
        doctorImage: doc3,
        speciality: "MBBS, MS - General Surgery, MCh - Urology",
        department: "Urology",
        rating: 4,
        location: "Louisiana, USA",
        services: ["Dental Fillings", "Whitening"],
      },
  ];

  return (
    <div>
        	{/* <!-- Breadcrumb --> */}
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-8 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><Link to="/">Home</Link></li>
									<li class="breadcrumb-item active" aria-current="page">Search</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">2245 matches found for : Dentist In Bangalore</h2>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Breadcrumb --> */}
            {/* <!-- Page Content --> */}
			<div class="content">
				<div class="container-fluid">
					<div class="row">
                    <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
						
                        {/* <!-- Search Filter --> */}
                        <div class="card search-filter">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Search Filter</h4>
                            </div>
                            <div class="card-body">
                            <div class="filter-widget">
                                <h4>Gender</h4>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type" checked />
                                        <span class="checkmark"></span> Male Doctor
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type" />
                                        <span class="checkmark"></span> Female Doctor
                                    </label>
                                </div>
                            </div>
                            <div class="filter-widget">
                                <h4>Select Specialist</h4>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" checked />
                                        <span class="checkmark"></span> Urology
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" checked />
                                        <span class="checkmark"></span> Neurology
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span class="checkmark"></span> Dentist
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span class="checkmark"></span> Orthopedic
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span class="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span class="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                            </div>
                                <div class="btn-search">
                                    <button type="button" class="btn btn-block">Search</button>
                                </div>	
                            </div>
                        </div>
                        {/* <!-- /Search Filter --> */}
                    </div>
                    <div class="col-md-12 col-lg-8 col-xl-9">
                        {
                            doctorWidgets.map(d=>(
                                // <!-- Doctor Widget -->
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<Link to="/docProfile">
													<img src={d.doctorImage} class="img-fluid" alt="DoctorImage"/>
												</Link>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">{d.doctorName}</a></h4>
												<p class="doc-speciality">{d.speciality}</p>
												<h5 class="doc-department">{d.department}</h5>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(17)</span>
												</div>
												
												<div class="clinic-services">
                                                    {
                                                        d.services.map(ds=>(
                                                          <div>
                                                              <span>Dental Fillings</span>
													          <span> Whitneing</span>
                                                          </div>
                                                        ))
                                                    }
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 98%</li>
													<li><i class="far fa-comment"></i> 17 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> {d.location}</li>
													<li><i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
												</ul>
											</div>
											<div class="clinic-booking">
												<Link class="view-pro-btn" to="/docProfile">View Profile</Link>
												<Link class="apt-btn" to="/bookAppointment">Book Appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
                        ))}
                    </div>

                    </div>
                </div>
            </div>
    </div>
  )
}
