import { BeatLoader } from "react-spinners";
const LoadingButton = ({ loading, onClick, text }) => {
	return (
		<>
			<div className='btn_wrap'>
				<button
					type='submit'
					name=''
					disabled={loading}
					onClick={onClick}>
					{!loading ? (
						text ? (
							text
						) : (
							"Submit"
						)
					) : (
						<BeatLoader
							color={"white"}
							loading={loading}
							size={13}
							aria-label='Loading Spinner'
							data-testid='loader'
						/>
					)}
				</button>
			</div>
		</>
	);
};
export default LoadingButton;
