import vars from "../../../_variables.scss";
import NavButton from "./NavButton";
import AppLogo from "./AppLogo";
import styled from "styled-components";
import { MenuItems, menuItemsList } from "../MenuUtils";

interface TopBarProps {
	handleMenuClicks: any;
}

const AppBar = styled.div`
	display: flex;
	padding: 10px 20px;
	align-items: center;

	@media screen and (max-width: ${vars.xsMax}) {
		padding: 10px;
	}
`;

const TopBar = (props: TopBarProps) => {
	return (
		<AppBar>
			<div onClick={() => props.handleMenuClicks(MenuItems.HOME)}>
				<AppLogo />
			</div>
			<div style={{ flex: "1" }} />

			{menuItemsList.map((item, idx) => {
				return (
					<div
						key={idx}
						onClick={() => props.handleMenuClicks(item.id)}
					>
						<NavButton title={item.title} icon={item.icon} />
					</div>
				);
			})}
		</AppBar>
	);
};

export default TopBar;
