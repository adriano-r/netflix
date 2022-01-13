import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className="video"
				autoPlay
				onProgress
				controls
				src="../../public/assets/video/a.mp4"
			/>
		</div>
	);
}
