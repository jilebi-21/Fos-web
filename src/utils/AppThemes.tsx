import { createTheme } from "@mui/material";
// import "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		small: true;
		medium: true;
		large: true;
		xlarge: true;
	}
}

declare module "@mui/material/styles" {
	interface Palette {
		shadow: {
			top: string;
			bottom: string;
			highlight: string;
		};
	}
	interface PaletteOptions {
		shadow?: {
			top?: string;
			bottom?: string;
			highlight?: string;
		};
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

export const baseTheme = createTheme({
	palette: {
		background: {
			default: "#f8f8f8",
			paper: "#fff",
		},
	},
	breakpoints: breakpointValues(),
});

export let darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "#4baf4b",
		},
		background: {
			default: "#181818",
			paper: "#161616",
		},
	},
});

darkTheme = createTheme(darkTheme, {
	palette: {
		shadow: {
			top: "#030303",
			bottom: "#303030",
			highlight: darkTheme.palette.primary.main,
		},
	},
});
