import React, { useState } from 'react'
import "./login.css"
import LoginImage from "../assets/img/login.png"
import RyansMedia from "../assets/img/ryansmedia-logo.png"
import EmailIcon from "../assets/img/email.png"
import PasswordIcon from "../assets/img/password.png"

export default function LoginPage() {
	document.title = "Ryans Media - Login"

	const initialState = Object.freeze({ email: "", password: ""})
	const [credentials, setCredentials] = useState(initialState)

	const handleLogin = (e) => {
		e.preventDefault()

		setCredentials({...credentials, [e.target.name] : e.target.value.trim()})
	}

	return (
		<div className="page-bg">
			<div className="login-container row">
				<div className="col-md-7 col-sm-7 design-wrapper">
					<div className="img-wrapper">
						<img className="img-responsive" src={LoginImage} alt="Login" />
					</div>
				</div>
				<div className="col-md-4 col-sm-4 offset-md-1">
					<div className="row border-1 form-wrapper">
						<form className="display-flex">
							<div className="border-1 flex-start">
								<h2 className="title">Welcome</h2>
								<img className="img-fluid" src={RyansMedia} alt="Ryans Media" />
							
								<div className="row input-container">
									<div className="col-2 item-center"> <img className="form-icon" src={EmailIcon} alt="Icon" /> </div>
									<div className="col-9 border-left">
										<span className="form-title"> Email Address </span>
										<input 
											className="input-box" 
											type="email" 
											autoComplete='off' 
											name="email" 
											placeholder="type email..."
											onChange={handleLogin} 
										/>
									</div>
								</div>

								<div className="row input-container">
									<div className="col-2 item-center"> <img className="form-icon" src={PasswordIcon} alt="Icon" /> </div>
									<div className="col-9 border-left">
										<span className="form-title"> Password </span>
										<input 
											className="input-box" 
											type="password" 
											autoComplete='off' 
											name="password" 
											placeholder="type password..."
											onChange={handleLogin} 
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-6">
										<button className="login-btn">Login</button>
									</div>
									<div className="col-6 d-flex align-items-center justify-content-end">
										<span onClick={() => console.log(credentials)} className="forgotpass">Forgot Password ?</span>
									</div>
								</div>
							</div>
						
							<div className="flexgrow"></div>

							<div className="row border-1">
								<div className="col-6">
									<div className="row">www.ryansarchives.com</div>
									<div className="row">icon</div>
								</div>
								<div className="col-6">
									<div className="row">Visit Our Social Sites:</div>
									<div className="row">icon</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}