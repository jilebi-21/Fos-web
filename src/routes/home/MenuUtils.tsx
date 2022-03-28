import styled from "styled-components";
import vars from "../../_variables.scss";

export enum MenuItems {
	HOME,
	DOWNLOADS,
	ABOUT,
}

const Svg = styled.svg`
	width: 20px;
	height: 20px;
	fill: ${vars.colorPrimary};
`;

const DownloadIcon = () => (
	<Svg focusable="false" viewBox="0 0 24 24">
		<path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
	</Svg>
);

const InfoIcon = () => (
	<Svg focusable="false" viewBox="0 0 24 24">
		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
	</Svg>
);

export const menuItemsList = [
	{
		id: MenuItems.DOWNLOADS,
		title: "Downloads",
		icon: <DownloadIcon />,
	},
	{
		id: MenuItems.ABOUT,
		title: "About",
		icon: <InfoIcon />,
	},
];
