import { BeatLoader } from "react-spinners";
const LoadingButton = ({ loading, onClick, text, className, disabled }) => {
	console.log(disabled, "see");
	return (
		<>
			<div className='btn_wrap'>
				<button
					type='submit'
					className={className}
					name=''
					disabled={!loading ? disabled : loading}
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
