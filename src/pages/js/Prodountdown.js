import React, { useState } from "react";
import moment from "moment";
import Countdown from "react-countdown";
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const Prodountdown = ({ start, end, isExpire, setIsExpire }) => {
	let starts = new Date(start).getTime();
	let now = new Date().getTime();
	//let ends = new Date(end).getTime();
	let title = "expires in";
	let remaining = 0;
	if (starts - now < 0) {
		remaining = end;
	} else {
		remaining = start;
		title = " starts in";
	}

	return (
		<>
			{!isExpire ? (
				<div id='countdowntwo'>
					<ul>
						<li>
							<span className='exp_tym'>{title}:</span>
						</li>
						<Countdown
							style={{ color: "white" }}
							date={remaining}
							daysInHours={true}
							onComplete={() => setIsExpire(true)}
						/>
					</ul>
				</div>
			) : (
				<div id='countdownend'>
					<span className='exp_tym'>Expired</span>
				</div>
			)}
		</>
	);
};

export default Prodountdown;
