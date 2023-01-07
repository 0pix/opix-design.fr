import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {

	function navLinkStyles({isActive}) {
		return {
			fontWeight: isActive ? 'bolder' : '200',
		}
	}

	return (
		<div className={'header'}>
			<nav>
				<ul>
					<NavLink style={navLinkStyles} to="/">Home</NavLink>
					<NavLink style={navLinkStyles} to="/about">About</NavLink>
					<NavLink style={navLinkStyles} to="/portfolio">Portfolio</NavLink>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
