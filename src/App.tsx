import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import DevicesPage from "./routes/devices/Downloads";
import { darkTheme } from "./utils/AppThemes";

export default function App() {
	const defaultTheme = darkTheme;

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<DevicesPage />
		</ThemeProvider>
	);
}
