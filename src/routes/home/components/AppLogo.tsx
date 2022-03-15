import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material";
import logo from "../../../icons/logo.png";

const logoSize = 45;

const useStyles = (theme: Theme) => {
	return {
		boxStyle: {
			cursor: "pointer",
			transition: "300ms",
			padding: "0px 10px",

			"&:hover": {
				backgroundColor: theme.palette.background.paper,
				boxShadow: `0 0 10px ${theme.palette.divider}`,
				borderRadius: "24.5px",
			},
		},
	};
};

const AppLogo = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.boxStyle}>
			<Typography
				sx={{
					color: theme.palette.primary.main,
					alignItems: "center",
					verticalAlign: "middle",
					display: "inline-flex",
					whiteSpace: "nowrap",
				}}
			>
				<img
					src={logo}
					width={logoSize}
					height={logoSize}
					style={{ display: "inline-block" }}
				/>
				Freaky OS
			</Typography>
		</Box>
	);
};

export default AppLogo;
