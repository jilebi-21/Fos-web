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
			borderRadius: "16px",
			padding: "10px 20px",

			"&:hover": {
				backgroundColor: theme.palette.background.paper,
				boxShadow: `inset 0 0 10px ${theme.palette.shadow.highlight}`,
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
