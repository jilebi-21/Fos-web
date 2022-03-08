import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		small: true;
		medium: true;
		large: true;
		xlarge: true;
	}
}

const breakpointValues = () => {
	const defaultTheme = createTheme();

	return {
		values: {
			...defaultTheme.breakpoints.values,
			small: 0,
			medium: 730,
			large: 900,
			xlarge: 1070,
		},
	};
};

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#f8f8f8",
			paper: "#fff",
		},
	},
	breakpoints: breakpointValues(),
});

export const darkTheme = createTheme({
	...lightTheme,
	palette: {
		mode: "dark",
		background: {
			paper: "#212121",
		},
	},
});
