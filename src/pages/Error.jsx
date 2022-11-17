import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, []);
	return (
		<>
			<div className='container error-page'>
				<h2> PAGE NOT FOUND</h2>
			</div>
		</>
	);
};

export default Faq;
