import React from 'react'
import './breadcrumb.css'
import Navigator from '../assets/img/navigator.png'

export default function Breadcrumb({ label }) {
  return (
	<div className="flexbox">
		<div className="breadcrumb">
			<img className="breadcrumb-icon" src={Navigator} alt="Navigation" />
			<span className="breadcrumb-span">{label}</span>
			<span className="divider">/</span>
		</div>
	</div>
  )
}
