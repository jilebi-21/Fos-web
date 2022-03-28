import "./_default-styles.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { MenuItems } from "./routes/home/MenuUtils";
import { FreakyThemeProvider } from "./Utils";
import TopBar from "./routes/home/components/TopBar";
import HomeContent from "./routes/home/components/PaletteView";
import DevicesPage from "./routes/download/components/Downloads";

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

	return (
		<FreakyThemeProvider>
			<Container fluid className="base-container" style={{ padding: 0 }}>
				<TopBar handleMenuClicks={handleMenuClicks} />

				<Routes>
					<Route path={homePath} element={<HomeContent />} />
					<Route path={downloadsPath} element={<DevicesPage />} />
				</Routes>
			</Container>
		</FreakyThemeProvider>
	);
}
