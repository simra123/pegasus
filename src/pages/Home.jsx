import React, { useState, useEffect, useContext } from "react";
import { Sec1, Sec2, Sec3, Sec4, Sec5 } from "./components/Homecomponent/index";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import { BlockUi } from "../reauseble";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Home = ({ show, ageModal, setAgeModal }) => {
	const [store, setStore] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [recentlyViewed, setRecentlyViewed] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAllData = () => {
		if (!show) {
			CoreHttpHandler.request(
				"home",
				"main",
				{
					limit: 8,
					page: 0,
				},
				(response) => {
					setLoading(false);
					const res = response.data.data.data;
					res?.data.map((p) => {
						let avg_stars = 0;
						if (p.ratings[0].stars != null) {
							p.ratings.map((r) => {
								avg_stars += r.stars;
							});
						}
						p["avg_rating"] = avg_stars / p.ratings.length;
					});
					setFeaturedProducts(res.data);
					setStore(res.store);
					res?.recentlyViewed.map((p) => {
						let avg_stars = 0;
						if (p.ratings[0].stars != null) {
							p.ratings.map((r) => {
								avg_stars += r.stars;
							});
						}
						p["avg_rating"] = avg_stars / p.ratings.length;
					});
					setRecentlyViewed(res.recentlyViewed);
				},
				(err) => {
					console.log(err);
					setLoading(false);
				}
			);
		}
	};
	useEffect(() => {
		getAllData();
		//	ageValidations();
	}, [show]);
	// useEffect(() => {
	// 	if (!ageModal) {
	// 		ageValidations();
	// 	}
	// }, []);

	return (
		<>
			<BlockUi show={show} />
			<div id='home_main'>
				<div className='content_wrap'>
					<Sec1 />
					<Sec2
						data={featuredProducts}
						loading={loading}
					/>
					<Sec3 />
					<Sec4 show={show} />
					<Sec5
						data={store}
						recent={recentlyViewed}
						loading={loading}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
