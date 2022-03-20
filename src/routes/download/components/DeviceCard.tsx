import "bootstrap/dist/css/bootstrap.min.css";
import "./_downloadsStyles.scss";
import { DeviceInfo } from "../interfaces/DeviceInfo";
import DeviceImage from "./DeviceImage";

interface DeviceProps {
	info: DeviceInfo;
}

const DeviceCard = (props: DeviceProps) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div className="downloads--device-card-container">
				<div className="downloads--image-wrapper">
					<DeviceImage src={props.info.image} />
				</div>
				<div className="downloads--device-card-titles-container">
					<p className="device-titles">{props.info.name}</p>
					<p
						className="text-nowrap text-uppercase text-secondary device-titles"
						style={{ fontSize: "12px" }}
					>
						{props.info.codename}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DeviceCard;
