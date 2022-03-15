import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Theme, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import NavButton from "./components/NavButton";
import AppLogo from "./components/AppLogo";

const navButtonIconSize = 20;

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

const TopBar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const menuItems = [
		{
			title: "Downloads",
			icon: <DownloadIcon sx={styles.navButtonIconSize} />,
		},
		{
			title: "About",
			icon: <InfoIcon sx={styles.navButtonIconSize} />,
		},
	];

	return (
		<Box>
			<AppBar sx={styles.appBar} elevation={0}>
				<Toolbar>
					<AppLogo />
					<Box flex={1} />

					{menuItems.map((item, idx) => {
						return (
							<NavButton
								key={idx}
								title={item.title}
								icon={item.icon}
							/>
						);
					})}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
