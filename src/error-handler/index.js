import React from "react";
export default class ErrorHandling extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		setTimeout(function () {
			window.location.replace("/");
		}, 10);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div className='misc-wrapper'>
					<div className='misc-inner p-2 p-sm-3 align-center mt-3'>
						<div className='w-100 text-center'>
							<h2 className='mb-1'>Page Not Found </h2>
							<p className='mb-2'>
								Oops! The requested URL was not found on this server.
							</p>
							<h1 className='mb-1 text-dark'>404</h1>
						</div>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}
