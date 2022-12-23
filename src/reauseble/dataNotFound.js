const DataNotFound = ({ lowerText }) => {
	return (
		<>
			<div
				className='text-center mt-3'
				style={{
					color: "white",
					fontSize: "20zpx",
					margin: "100px auto",
					textAlign: "center",
				}}>
				NO DATA FOUND
				<br />
				{lowerText}
			</div>
		</>
	);
};
export default DataNotFound;
