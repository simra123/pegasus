import React, { useState, useEffect } from "react";
import { Sec1, Sec2, Sec3, Sec4, Sec5 } from "./components/Homecomponent/index";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Home = () => {
	const [store, setStore] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [recentlyViewed, setRecentlyViewed] = useState([]);

	const getAllData = () => {
		CoreHttpHandler.request(
			"home",
			"main",
			{
				limit: 8,
				page: 0,
			},
			(response) => {
				const res = response.data.data.data;
				setFeaturedProducts(res.data);
				setStore(res.store);
				setRecentlyViewed(res.recentlyViewed);
			},
			(err) => {
				console.log(err);
			}
		);
	};
	useEffect(() => {
		getAllData();
	}, []);
	return (
		<>
			<div id='home_main'>
				<div className='content_wrap'>
					<Sec1 />
					<Sec2 data={featuredProducts} />
					{/* <Sec3 /> */}
					{/* <Sec4 /> */}
					<Sec5
						data={store}
						recent={recentlyViewed}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
