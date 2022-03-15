import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./routes/home/TopBar";
import { darkTheme } from "./utils/AppThemes";

export default function App() {
	const defaultTheme = darkTheme;

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<TopBar />
		</ThemeProvider>
	);
}
