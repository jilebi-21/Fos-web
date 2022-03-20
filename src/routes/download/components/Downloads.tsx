import { useEffect, useState } from "react";
import axios from "axios";
import DeviceCard from "./DeviceCard";
import { Col, Container, Row } from "reactstrap";

const url =
	"https://raw.githubusercontent.com/pruthvi-21/Fos-web/master/api/device-list.json";

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

	return (
		<Container>
			<Row>
				{devicesList.map((item, idx) => {
					return (
						<Col
							sm={12}
							md={6}
							lg={3}
							style={{ margin: "6px 0px" }}
						>
							<div key={idx}>
								<DeviceCard info={item} />
							</div>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default DevicesPage;
