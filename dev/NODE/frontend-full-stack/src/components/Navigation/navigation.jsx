/** @format */
import { Link } from "react-router-dom";
import * as style from "./navigation.module.css";
import Nexted from "./navItems";

export function Navigation({ className }) {
	return (
		<nav className={[style.navStyle, className].join(" ")}>
			<Link
				key="All"
				className={style.navLink}
				to="/products/"
				activeClassName={style.activeLink}
			>
				All products
			</Link>
			<Nexted />
		</nav>
	);
}
