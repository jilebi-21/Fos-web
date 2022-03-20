import TopBar from "./routes/home/components/TopBar";
import DevicesPage from "./routes/download/components/Downloads";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuItems } from "./routes/home/Utils";
import "./App.scss";
import { Container } from "reactstrap";

const homePath = "/";
const downloadsPath = "/downloads";

export default function App() {
	const navigate = useNavigate();

	const handleMenuClicks = (item: MenuItems) => {
		switch (item) {
			case MenuItems.HOME:
				navigate(homePath);
				break;
			case MenuItems.DOWNLOADS:
				navigate(downloadsPath);
				break;
			case MenuItems.ABOUT:
				console.log("About");
				break;
		}
	};

	const HomeContent = () => {
		return <Container fluid></Container>;
	};

	return (
		<Container fluid style={{ padding: 0 }}>
			<TopBar handleMenuClicks={handleMenuClicks} />

			<Routes>
				<Route path={homePath} element={HomeContent()} />
				<Route path={downloadsPath} element={<DevicesPage />} />
			</Routes>
		</Container>
	);
}
