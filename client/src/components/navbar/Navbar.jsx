import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search className="icon" />
					<span>KID</span>
					<Notifications className="icon" />
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F5b%2F1c%2Fe0%2F5b1ce09cc4397163cdacbd6c5b1d2b4a.jpg&f=1&nofb=1"
						alt=""
					/>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
