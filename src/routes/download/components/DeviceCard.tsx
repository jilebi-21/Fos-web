import { Theme, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { DeviceInfo } from "../interfaces/DeviceInfo";
import DeviceImage from "./DeviceImage";

interface DeviceProps {
	info: DeviceInfo;
}

const useStyles = (theme: Theme) => {
	const boxWidth = 200;
	const boxHeight = 240;
	const padding = theme.spacing(2);

	const imageSize = 80;

	return {
		container: {
			width: "100%",
			height: `calc(${imageSize} + 2 * ${theme.spacing(1)})`,
			padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
			borderRadius: "12px",
			backgroundColor: theme.palette.background.default,
			display: "flex",
			cursor: "pointer",
			transition: "250ms",
			boxShadow: `3px 3px 12px ${theme.palette.shadow.top}, -3px -3px 12px ${theme.palette.shadow.bottom}`,

			"&:hover": {
				boxShadow: `0px 0px 8px ${theme.palette.shadow.highlight}`,
				backgroundColor: `${theme.palette.background.paper}`,
			},

			[theme.breakpoints.up("large")]: {
				height: `calc(${boxHeight}px + 2 * ${padding})`,
				width: `calc(${boxWidth}px + 2 * ${padding})`,
				flexDirection: "column",
				padding: padding,
			},
		},

		imageBox: {
			height: imageSize,
			width: imageSize,

			[theme.breakpoints.up("large")]: {
				height: boxWidth,
				width: boxWidth,
				padding: theme.spacing(2.5),
			},
		},

		titlesBox: {
			textAlign: "left",
			margin: `auto ${padding}`,

			[theme.breakpoints.up("large")]: {
				textAlign: "center",
			},
		},
	};
};

const DeviceCard = (props: DeviceProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Box sx={styles.container}>
				<Box sx={styles.imageBox}>
					<DeviceImage src={props.info.image} />
				</Box>
				<Box sx={styles.titlesBox}>
					<Typography variant="body1">{props.info.name}</Typography>
					<Typography
						variant="caption"
						color={theme.palette.text.secondary}
					>
						{props.info.codename}
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default DeviceCard;
