import React from 'react'
import { Link } from 'react-router-dom'
import reg from '../assets/img/login-banner.png'

export default function Register() {
  return (
    <div style={{height:'80vh'}}>
        {/* <!-- Page Content --> */}
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">
								
							{/* <!-- Register Content --> */}
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src={reg} class="img-fluid" alt="Register"/>	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Register</h3>
										</div>
										
										{/* <!-- Register Form --> */}
										<form action="/">
											<div class="form-group form-focus">
												<input type="text" class="form-control floating" required/>
												<label class="focus-label">Name</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating" required/>
												<label class="focus-label">Mobile Number</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating" required/>
												<label class="focus-label">Create Password</label>
											</div>
										
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">or</span>
											</div>
                                            <div class="text-right">
												<Link class="forgot-link" to="/login">Already have an account?</Link>
											</div>
										</form>
										{/* <!-- /Register Form --> */}
										
									</div>
								</div>
							</div>
							{/* <!-- /Register Content --> */}
								
						</div>
					</div>

				</div>

			</div>		
			{/* <!-- /Page Content --> */}
    </div>
  )
}
