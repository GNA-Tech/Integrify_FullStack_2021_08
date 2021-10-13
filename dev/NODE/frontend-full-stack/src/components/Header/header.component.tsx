/** @format */
import { Link } from "react-router-dom";
import Logo from "../icons/logo";
import UserInfo from "./userInfo";

import { HeaderContainer, Container, ContRoot } from "./header.styles";

function Header() {
	return (
		<HeaderContainer>
			<Container>
				<ContRoot>
					<Link to="/">
						<Logo />
					</Link>
					<UserInfo />
				</ContRoot>
			</Container>
		</HeaderContainer>
	);
}

export default Header;
