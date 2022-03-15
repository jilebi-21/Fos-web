import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Theme, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import NavButton from "./components/NavButton";
import AppLogo from "./components/AppLogo";
import { MenuItems } from "./Utils";

const navButtonIconSize = 20;

interface TopBarProps {
	handleMenuClicks: any;
}

const useStyles = (theme: Theme) => {
	return {
		appBar: {
			backgroundColor: theme.palette.background.default,
		},

		navButtonIconSize: {
			width: navButtonIconSize,
			height: navButtonIconSize,
			textAlign: "center",
		},
	};
};

const TopBar = (props: TopBarProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

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
		<Box>
			<AppBar sx={styles.appBar} elevation={0}>
				<Toolbar>
					<div onClick={() => props.handleMenuClicks(MenuItems.HOME)}>
						<AppLogo />
					</div>
					<Box flex={1} />

					{menuItems.map((item, idx) => {
						return (
							<div
								key={idx}
								onClick={() => props.handleMenuClicks(item.id)}
							>
								<NavButton
									title={item.title}
									icon={item.icon}
								/>
							</div>
						);
					})}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
