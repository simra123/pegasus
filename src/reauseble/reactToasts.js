import { Fragment } from "react";
import {
	toast,
	Slide,
	Zoom,
	Flip,
	Bounc,
	ToastContainer,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastSuccess = (heading, text) => {
	toast.success(
		<>
			{/* <div className='toastify-header'>
				<div className='title-wrapper'>
					<Avatar
						size='sm'
						color='success'
						icon={<CheckCircle size={12} />}
					/>
					<h6 className='toast-title font-weight-bold'>{heading}</h6>
				</div>
			</div> */}
			<div className='toastify-body p-0'>
				<span>{text}</span>
			</div>
		</>,
		{ hideProgressBar: false }
	);
};
const ToastAlertSuccess = (text) => {
	toast.success(
		<>
			<div className='toastify-body p-0'>
				<span>{text}</span>
			</div>
		</>,
		{
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
			theme: "dark",
		}
	);
};
const ToastAlertError = (text) => {
	toast.error(
		<>
			<div className='toastify-body p-0'>
				<span>{text}</span>
			</div>
		</>,
		{
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
			theme: "dark",
		}
	);
};
const ToastError = (heading, text) => {
	toast.error(
		<>
			{/* <div className="toastify-header">
				<div className="title-wrapper">
					<Avatar size="sm" color="danger" icon={<XCircle size={12} />} />
					<h6 className="toast-title font-weight-bold">{heading}</h6>
				</div>
			</div> */}
			<div className='toastify-body p-0'>
				<span>{text}</span>
			</div>
		</>,
		{ hideProgressBar: false }
	);
};
export { ToastSuccess, ToastError, ToastAlertError, ToastAlertSuccess };
// const notifySuccess = () =>
// 	toast.success(<SuccessToast />, { hideProgressBar: true });
// const notifyError = () =>
// 	toast.error(<ErrorToast />, { hideProgressBar: true });
// const notifyWarning = () =>
// 	toast.warning(<WarningToast />, { hideProgressBar: true });
// const notifyInfo = () => toast.info(<InfoToast />, { hideProgressBar: true });
// const notifySuccessProgress = () => toast.success(<SuccessProgressToast />);

// return (
// 	<Card>
// 		<CardHeader>
// 			<CardTitle tag="h4">Types</CardTitle>
// 		</CardHeader>
// 		<CardBody>
// 			<div className="demo-inline-spacing">
// 				<Button.Ripple color="primary" onClick={notifyDefault} outline>
// 					Default
// 				</Button.Ripple>
// 				<Button.Ripple color="success" onClick={notifySuccess} outline>
// 					Success
// 				</Button.Ripple>
// 				<Button.Ripple color="danger" onClick={notifyError} outline>
// 					Error
// 				</Button.Ripple>
// 				<Button.Ripple color="warning" onClick={notifyWarning} outline>
// 					Warning
// 				</Button.Ripple>
// 				<Button.Ripple color="info" onClick={notifyInfo} outline>
// 					Info
// 				</Button.Ripple>
// 				<Button.Ripple
// 					color="success"
// 					onClick={notifySuccessProgress}
// 					outline
// 				>
// 					Success Progress Bar
// 				</Button.Ripple>
// 			</div>
// 		</CardBody>
// 	</Card>
// );
