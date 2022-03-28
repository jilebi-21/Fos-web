import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import vars from "../../../_variables.scss";

interface NavButtonProps {
	title: string;
	icon: any;
}

const Link = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 16px 12px;
	height: 55px;
	min-width: 55px;
	border-radius: 16px;
	cursor: pointer;
	text-decoration: none;
	transition: 250ms;

	&:hover {
		box-shadow: inset 0 0 10px ${vars.colorPrimary};
	}
`;

const NavButton = (props: NavButtonProps) => {
	const isSmallScreen = useMediaQuery({
		query: `(max-width: ${vars.sm})`,
	});

	return (
		<div style={{ margin: "0 5px" }}>
			<Link>
				{props.icon}
				{!isSmallScreen && (
					<p style={{ margin: "0 5px" }}>{props.title}</p>
				)}
			</Link>
		</div>
	);
};

export default NavButton;
