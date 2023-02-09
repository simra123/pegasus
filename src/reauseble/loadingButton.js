import { BeatLoader } from "react-spinners";
const LoadingButton = ({
	loading,
	onClick,
	text,
	style,
	className,
	disabled,
}) => {
	return (
		<>
			<div className='btn_wrap'>
				<button
					style={style}
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
