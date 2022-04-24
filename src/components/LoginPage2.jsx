import React, { useState } from 'react'
import "./login2.css"
import LoginImage from "../assets/img/login.png"
import RyansMedia from "../assets/img/ryansmedia-logo.png"
import EmailIcon from "../assets/img/email.png"
import PasswordIcon from "../assets/img/password.png"
import RyansIcon from "../assets/img/ryanslogo.png"
import FBIcon from "../assets/img/facebook.png"
import IGIcon from "../assets/img/instagram.png"
import INIcon from "../assets/img/linkedin.png"
import YTIcon from "../assets/img/youtube.png"

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
			<div className="login-container">
				<div className="design-wrapper">
					<div className="img-wrapper">
						<img className="img-responsive" src={LoginImage} alt="Login" />
					</div>
				</div>
				<div className="logo-wrapper">
					<img className="icon-responsive" src={RyansMedia} alt="Ryans Media" />
				</div>
				<div className="email-wrapper">
					<div className="row input-container">
						<div className="col-2 item-center min-height-75"> <img className="img-fluid icon-65 sm-f-w" src={EmailIcon} alt="Icon" /> </div>
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
						<div className="col-2 item-center  min-height-75"> <img className="img-fluid icon-85 sm-f-w" src={PasswordIcon} alt="Icon" /> </div>
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
				<div className="space-wrapper"></div>
				{/* <div className="footer-wrapper">
					<div className="row">
						<div className="col-md-6 col-sm-12 center-element">
							<div className="row footer-label">www.ryansarchives.com</div>
							<div className="row center-element"><img className="icon-ryans" src={RyansIcon} alt="Ryans Archives Limited" /></div>
						</div>
						<div className="col-md-6 col-sm-12 center-element">
							<div className="row footer-label">Visit Our Social Sites:</div>
							<div className="footer-icons">
								<a href="https://www.facebook.com/ryansmediapage/" target="_blank" rel="noreferrer">
									<img className="footer-icon" src={FBIcon} alt="Facebook" />
								</a>
								<a href="https://www.instagram.com/ryans_media/?hl=en" target="_blank" rel="noreferrer">
									<img className="footer-icon" src={IGIcon} alt="Instagram" />
								</a>
								<a href="https://bd.linkedin.com/company/rayansmedia" target="_blank" rel="noreferrer">
									<img className="footer-icon" src={INIcon} alt="Linkedin" />
								</a>
								<a href="https://www.youtube.com/channel/UCMEVKGs7OhRZb7Gw3LaCVhg" target="_blank" rel="noreferrer">
									<img className="footer-icon" src={YTIcon} alt="Youtube" />
								</a>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}