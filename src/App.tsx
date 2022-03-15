import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./routes/home/TopBar";
import DevicesPage from "./routes/devices/components/Downloads";
import { darkTheme, lightTheme } from "./utils/AppThemes";

export default function App() {
	const defaultTheme = lightTheme;

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<TopBar />
			<DevicesPage />
		</ThemeProvider>
	);
}
