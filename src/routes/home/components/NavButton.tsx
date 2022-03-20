import { useMediaQuery } from "react-responsive";
import "./_toolbarStyles.scss";

interface NavButtonProps {
	title: string;
	icon: any;
}

const NavButton = (props: NavButtonProps) => {
	const isSmallScreen = useMediaQuery({
		query: "(max-width: 600px)",
	});

	return (
		<div style={{ margin: "0 5px" }}>
			<a className="link">
				{props.icon}
				{!isSmallScreen && (
					<p style={{ margin: "0 5px" }}>{props.title}</p>
				)}
			</a>
		</div>
	);
};

export default NavButton;
