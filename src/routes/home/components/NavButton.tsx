import { Theme, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

interface NavButtonProps {
	title: string;
	icon: any;
}

const useStyles = (theme: Theme) => {
	return {
		navButtonBox: {
			margin: "0 5px",
		},

		link: {
			display: "inline-flex",
			alignItems: "center",
			padding: "8px 12px",
			borderRadius: "30px",
			cursor: "pointer",
			textDecoration: "none",
			transition: "250ms",
			color: theme.palette.text.primary,

			["&:hover"]: {
				color: theme.palette.primary.main,
				backgroundColor: theme.palette.background.paper,
				boxShadow: `0 0 10px ${theme.palette.divider}`,
			},
		},

		text: {
			margin: "0 5px",
		},
	};
};

const NavButton = (props: NavButtonProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={styles.navButtonBox}>
			<Tooltip title={isSmallScreen ? props.title : ""}>
				<Link sx={styles.link}>
					{props.icon}
					{!isSmallScreen && (
						<Typography variant="body1" sx={styles.text}>
							{props.title}
						</Typography>
					)}
				</Link>
			</Tooltip>
		</Box>
	);
};

export default NavButton;
