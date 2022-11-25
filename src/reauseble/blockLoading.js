import loader from "../assets/images/loader.gif";
const BlockUi = ({ show }) => {
	return (
		<>
			{show ? (
				<div style={{ position: "relative" }}>
					<div
						style={{
							height: "100vh",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "fixed",
							zIndex: "100",
							bottom: "0",
							backgroundColor: "black",
						}}>
						<img
							src={loader}
							height={480}
							width={270}
						/>
					</div>
				</div>
			) : null}
		</>
	);
};
export default BlockUi;
