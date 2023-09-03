import React from 'react'
import login from '../assets/img/login-banner.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div style={{height:'70vh'}}>
        	{/* <!-- Page Content --> */}
			<div class="content">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
							
							{/* <!-- Login Tab Content --> */}
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src={login} class="img-fluid" alt="Login"/>	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Login</h3>
										</div>
										<form action="/">
											<div class="form-group form-focus">
												<input type="email" class="form-control floating" required/>
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating" required/>
												<label class="focus-label">Password</label>
											</div>
											{/* <div class="text-right">
												<a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
											</div> */}
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">or</span>
											</div>
											<div class="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
										</form>
									</div>
								</div>
							</div>
							{/* <!-- /Login Tab Content --> */}
								
						</div>
					</div>

				</div>

			</div>		
			{/* <!-- /Page Content --> */}
    </div>
  )
}
