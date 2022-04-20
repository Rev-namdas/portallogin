import React from 'react'
import "./login.css"
import LoginImage from "../assets/img/login.png"
import RyansMedia from "../assets/img/ryansmedia-logo.png"
import EmailIcon from "../assets/img/email.png"
import PasswordIcon from "../assets/img/password.png"

export default function LoginPage() {
	document.title = "Ryans Media - Login"

  return (
	<div className="page-bg">
		<div className="login-container row">
			<div className="col-md-7 design-wrapper">
				<div className="img-wrapper">
					<img className="img-responsive" src={LoginImage} alt="Login" />
				</div>
			</div>
			<div className="col-md-3 offset-md-1 form-wrapper">
				<div className="custom-center">
					<div className="title">Welcome</div>
					<img className="img-fluid" src={RyansMedia} alt="Ryans Media" />
					
					{
						[
							{ title: "Email Address", icon: EmailIcon, name: 'email', placeholder: 'type email...' },
							{ title: "Password", icon: PasswordIcon, name: 'password', placeholder: 'type password...' }
						].map(each => (
							<div className="row input-container">
								<div className="col-2 item-center"> <img className="form-icon" src={each.icon} alt="Icon" /> </div>
								<div className="col-9 border-left">
									<span className="form-title"> {each.title} </span>
									<input className="input-box" type="text" name={each.name} placeholder={each.placeholder} />
								</div>
							</div>
						))
					}

					<div className="col-md-12 btn-wrapper">
						<button className="login-btn">Login</button>
					</div>
					<div className="col-md-6 offset-10 mt-3">Forgot Password ?</div>
				</div>
				<div className="grow"></div>
				<div>footer</div>
			</div>
		</div>
	</div>
  )
}