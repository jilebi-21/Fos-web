import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./routes/home/TopBar";
import DevicesPage from "./routes/download/components/Downloads";
import { darkTheme } from "./utils/AppThemes";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuItems } from "./routes/home/Utils";

const homePath = "/";
const downloadsPath = "/downloads";

export default function App() {
	const defaultTheme = darkTheme;
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
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<TopBar handleMenuClicks={handleMenuClicks} />

			<Routes>
				<Route path={homePath} element={<div />} />
				<Route path={downloadsPath} element={<DevicesPage />} />
			</Routes>
		</ThemeProvider>
	);
}
