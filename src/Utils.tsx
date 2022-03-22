import { FC } from "react";
import { ThemeProvider } from "styled-components";

export const baseTheme = {};
export const currentTheme = baseTheme;

interface Props {}

export const FreakyThemeProvider: FC<Props> = ({ children }) => (
	<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
);
