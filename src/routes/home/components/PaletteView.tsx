import { Container } from "reactstrap";
import "./_palette-view.scss";

const HomeContent = () => {
	return (
		<Container
			fluid
			style={{
				display: "flex",
				justifyContent: "center",
				marginTop: "40px",
			}}
		>
			<div>
				<div className="color-container-primary">
					<div className="pc" />
					<div className="pcl" />
					<div className="pcd" />
				</div>

				<div className="color-container-secondary">
					<div className="sc" />
					<div className="scl" />
					<div className="scd" />
				</div>

				<div className="scv" />

				<div style={{ marginTop: "20px" }}>
					<div className="tcp">Text Color Primary</div>
					<div className="tcpd">Text Color Primary Disabled</div>
					<div className="tcs">Text Color Secondary</div>
					<div className="tcsd">Text Color Secondary Disabled</div>
				</div>
			</div>
		</Container>
	);
};

export default HomeContent;
