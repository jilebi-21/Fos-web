import logo from "../../../icons/logo.png";
import styled from "styled-components";
import vars from "../../../_variables.scss";

const AppIconContainer = styled.div`
	cursor: pointer;
	transition: 300ms;
	border-radius: 16px;
	padding: 10px 20px;

	&:hover {
		box-shadow: inset 0 0 10px ${vars.colorPrimary};
	}
`;

const AppIcon = styled.img`
	width: 45px;
	height: 45px;
	display: inline-block;
`;

const AppLogo = () => {
	return (
		<AppIconContainer>
			<AppIcon src={logo} />
			<span>Freaky OS</span>
		</AppIconContainer>
	);
};

export default AppLogo;
