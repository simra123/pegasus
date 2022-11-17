import loader from "../assets/images/loader.gif";
const Loader = ({ loading }) => {
	return (
		<>
			{loading ? (
				<div
					style={{
						height: "80vh",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<img
						src={loader}
						height={380}
						width={210}
					/>
				</div>
			) : null}
		</>
	);
};
export default Loader;
