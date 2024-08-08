import './NavBar.css'

import { FaBars, FaTimes } from "react-icons/fa";

import { Home } from '../Home';
import { useRef } from "react";

export function Navs() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<h3 className='logo'>LOGO</h3>
			<nav ref={navRef}>
			<ul>
				<li><a href="/#">PRODUCT</a></li>
				<li><a href="/#">PROJECT</a></li>
				<li><a href="/#">RESOURCES</a></li>
				<li><a href="/#">ABOUT</a></li>
				<li><a href='/#'>CONTACT</a></li>
				<li>
				
				<button className='bts'>Register Demo</button>
				
				</li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		<Home></Home>
		</>
		
	);
}


