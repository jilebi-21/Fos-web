import Image from "mui-image";

const DeviceImage = (props) => {
	return <Image src={props.src} fit="contain" duration={100} easing="none" />;
};

export default DeviceImage;
