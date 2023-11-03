import { Link, NavLink } from "react-router-dom"
import SpanifiedTitle from "../SpanifiedTitle/SpanifiedTitle"
import "./Navbar.css"

function Navbar() {
	return (
		<div className="Navbar">
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
			<Link to="/">
				<SpanifiedTitle title="conversationalist" />
			</Link>
			<nav>
				<ul>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Signup</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
