import { Theme, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import DeviceCard from "./DeviceCard";
import DeviceListContainer from "./DeviceListContainer";

const url =
	"https://raw.githubusercontent.com/pruthvi-21/Fos-web/master/api/device-list.json";

const useStyles = (theme: Theme) => {
	return {
		gridItem: {
			width: "100%",
			[theme.breakpoints.up("medium")]: {
				width: "50%",
			},
			[theme.breakpoints.up("large")]: {
				width: "33.333%",
			},
			[theme.breakpoints.up("xlarge")]: {
				width: "25%",
			},
		},
	};
};

const DevicesPage = () => {
	const [devicesList, setDevicesList] = useState([]);
	const theme = useTheme();
	const styles = useStyles(theme);

	const fetchAllDevices = async () => {
		const response = await axios.get(url);
		return response.data;
	};

	useEffect(() => {
		fetchAllDevices().then((result) => {
			setDevicesList(result.response);
		});
	}, []);

	return (
		<Container>
			<DeviceListContainer>
				{devicesList.map((item, idx) => {
					return (
						<Grid sx={styles.gridItem} item key={idx}>
							<DeviceCard info={item} />
						</Grid>
					);
				})}
			</DeviceListContainer>
		</Container>
	);
};

export default DevicesPage;
