import vars from "../../../_variables.scss";
import { DeviceInfo } from "../interfaces/DeviceInfo";
import DeviceImage from "./DeviceImage";
import styled from "styled-components";

interface DeviceProps {
	info: DeviceInfo;
}

const DeviceCardContainer = styled.div`
	width: 100%;
	height: calc(80px + 2 * 8px);
	padding: 8px 12px;
	background-color: ${vars.colorSurfaceVariant};
	border-radius: 12px;
	display: flex;
	cursor: pointer;
	transition: 250ms;
	align-items: center;

	&:hover {
		box-shadow: 0px 0px 8px #eaeaea;
		background-color: #212121;
		box-shadow: 3px 3px 12px ${vars.colorPrimary},
			-3px -3px 12px ${vars.colorPrimary};
	}

	@media screen and (min-width: ${vars.lg}) {
		height: calc(240px + 2 * 16px);
		width: calc(200px + 2 * 16px);
		flex-direction: column;
	}
`;

const DeviceImageWrapper = styled.div`
	height: 80px;
	width: 80px;

	@media screen and (min-width: ${vars.lg}) {
		height: 170px;
		width: 170px;
		padding: "20px";
	}
`;

const DeviceDetailsContainer = styled.div`
	margin: auto 12px;
`;

const DeviceTitle = styled.p`
	text-align: start;
	margin: 0;

	@media screen and (min-width: ${vars.lg}) {
		text-align: center;
	}
`;

const DeviceSubTitle = styled.p`
	font-size: 11px;
	color: ${vars.textColorSecondary};
	text-align: start;
	font-weight: bold;
	margin: 0;
	color: ${vars.colorSecondaryLighter};

	@media screen and (min-width: 1000px) {
		text-align: center;
	}
`;

const DeviceCard = (props: DeviceProps) => {
	return (
		<DeviceCardContainer>
			<DeviceImageWrapper>
				<DeviceImage src={props.info.image} />
			</DeviceImageWrapper>
			<DeviceDetailsContainer>
				<DeviceTitle>{props.info.name}</DeviceTitle>
				<DeviceSubTitle className="text-nowrap text-uppercase device-titles">
					{props.info.codename}
				</DeviceSubTitle>
			</DeviceDetailsContainer>
		</DeviceCardContainer>
	);
};

export default DeviceCard;
