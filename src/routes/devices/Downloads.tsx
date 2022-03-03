import axios from "axios";
import { useEffect, useState } from "react";

const url =
	"https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/devices.json";

const DevicesPage = () => {
	const [devicesList, setDevicesList] = useState([]);

	const fetchAllDevices = async () => {
		const response = await axios.get(url);
		return response.data;
	};

	useEffect(() => {
		fetchAllDevices().then((result) => {
			setDevicesList(result.response);
		});
	}, []);

	return <div>{<p>{devicesList.length}</p>}</div>;
};

export default DevicesPage;
