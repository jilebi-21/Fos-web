import "bootstrap/dist/css/bootstrap.min.css";
import "./_toolbarStyles.scss";
import logo from "../../../icons/logo.png";

const logoSize = 45;

const styles = {
	boxStyle: {
		cursor: "pointer",
		transition: "300ms",
		borderRadius: "16px",
		padding: "10px 20px",
		// backgroundColor: "red",

		"&:hover": {
			// background-color: #EAEAEA;
			boxShadow: "inset 0 0 10px #00f801",
		},
	},
};

const AppLogo = () => {
	return (
		<div style={styles.boxStyle}>
			<img
				src={logo}
				width={logoSize}
				height={logoSize}
				style={{ display: "inline-block" }}
			/>
			<span>Freaky OS</span>
		</div>
	);
};

export default AppLogo;
