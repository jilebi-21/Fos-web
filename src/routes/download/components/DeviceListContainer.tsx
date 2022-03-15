import { Theme, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const useStyles = (theme: Theme) => {
	return {
		gridContainerWrapper: {
			[theme.breakpoints.up("large")]: {
				padding: `0 ${theme.spacing(4)}`,
			},
		},

		gridContainer: {
			[theme.breakpoints.up("medium")]: {
				paddingRight: theme.spacing(1), //=columnSpacing
			},
			[theme.breakpoints.up("large")]: {
				justifyContent: "left",
				paddingRight: 0,
			},
		},
	};
};

const DeviceListContainer = (props: any) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.gridContainerWrapper}>
			<Grid
				container
				sx={styles.gridContainer}
				rowSpacing={theme.spacing(1.5)}
				columnSpacing={theme.spacing(1)}
			>
				{props.children}
			</Grid>
		</Box>
	);
};

export default DeviceListContainer;
