import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import NavButton from "./NavButton";
import AppLogo from "./AppLogo";
import { MenuItems } from "../Utils";
import { Container } from "reactstrap";

const navButtonIconSize = 20;

interface TopBarProps {
	handleMenuClicks: any;
}

const useStyles = {
	appBar: {
		display: "flex",
	},

	navButtonIconSize: {
		width: navButtonIconSize,
		height: navButtonIconSize,
		textAlign: "center",
	},

	"@media screen and (min-width: 800px)": {
		appBar: {
			backgroundColor: "red",
		},
	},
};

const TopBar = (props: TopBarProps) => {
	const styles = useStyles;

	const menuItems = [
		{
			id: MenuItems.DOWNLOADS,
			title: "Downloads",
			icon: <DownloadIcon sx={styles.navButtonIconSize} />,
		},
		{
			id: MenuItems.ABOUT,
			title: "About",
			icon: <InfoIcon sx={styles.navButtonIconSize} />,
		},
	];

	return (
		<Container fluid style={styles.appBar}>
			<div onClick={() => props.handleMenuClicks(MenuItems.HOME)}>
				<AppLogo />
			</div>
			<div style={{ flex: "1" }} />

			{menuItems.map((item, idx) => {
				return (
					<div
						key={idx}
						onClick={() => props.handleMenuClicks(item.id)}
					>
						<NavButton title={item.title} icon={item.icon} />
					</div>
				);
			})}
		</Container>
	);
};

export default TopBar;
