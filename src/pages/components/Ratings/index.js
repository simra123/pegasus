import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FiStar } from "react-icons/fi";

const Rate = ({ count, rating, onClick }) => {
	const [hoverRating, setHoverRating] = useState(0);
	const color = {
		filled: "#f3ac3b",
		unfilled: "#4a4444de",
	};
	const getColor = (index) => {
		if (hoverRating >= index) {
			return color.filled;
		} else if (!hoverRating && rating >= index) {
			return color.filled;
		}

		return color.unfilled;
	};

	const starRating = useMemo(() => {
		return Array(count)
			.fill(0)
			.map((_, i) => i + 1)
			.map((idx) => (
				<span
					style={{
						padding: "10px",
						textAlign: "center",
						cursor: "pointer",
					}}>
					<FiStar
						key={idx}
						size={45}
						color={getColor(idx)}
						onClick={() => onClick(idx)}
						fill={getColor(idx)}
						onMouseEnter={() => setHoverRating(idx)}
						onMouseLeave={() => setHoverRating(0)}
					/>
				</span>
			));
	}, [count, rating, hoverRating]);
	console.log(rating, "rating");
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{starRating}
		</div>
	);
};

export default Rate;
