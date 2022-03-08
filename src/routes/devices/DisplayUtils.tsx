import { useMediaQuery } from "react-responsive";

const xs = "(max-width: 600px)";
const sm = "(max-width: 900px)";
const md = "(max-width: 1200px)";
const lg = "(max-width: 1800px)";

export const DisplayMediaBreakpoints = () => {
	const breakpoints = {
		isXs: useMediaQuery({ query: xs }),
		isSm: useMediaQuery({ query: sm }),
		isMd: useMediaQuery({ query: md }),
		isLg: useMediaQuery({ query: lg }),
		active: "xs",
	};
	if (breakpoints.isXs) breakpoints.active = "xs";
	if (breakpoints.isSm) breakpoints.active = "sm";
	if (breakpoints.isMd) breakpoints.active = "md";
	if (breakpoints.isLg) breakpoints.active = "lg";
	return breakpoints;
};

export const DisplayMediaQuery = () => {
	const bps = {
		xs: xs,
		sm: sm,
		md: md,
		lg: lg,
	};
	return bps;
};
