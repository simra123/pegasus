import React, { useEffect, useRef } from "react";
import LoadingButton from "./loadingButton";
import { ToastAlertError } from "./reactToasts";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import { MdOutlineClose } from "react-icons/md";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const containerStyle = {
	width: "400px",
	height: "400px",
	//top: " 100px !important",
};

function MyComponent({
	showMap,
	setShowMap,
	setCharges,
	store_id,
	setCheckoutDetails,
	checkoutDetails,
	center,
	setCenter,
	setSellerData,
	sellerData,
}) {
	const [marker, setMarkers] = React.useState({
		lat: "",
		lng: "",
		time: new Date(),
	});

	const modal = useRef();
	const [search, setSearch] = React.useState("");
	const [loading, setLoading] = React.useState("");
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		libraries: ["places", "geometry"],
		googleMapsApiKey: "AIzaSyBIjkpul90Whe2sCCbJc2uPabK_pnyBc4g",
	});
	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const handleAddress = (e) => {
		setLoading(true);
		e.preventDefault();
		if (checkoutDetails) {
			CoreHttpHandler.request(
				"orders",
				"getAddress",
				{
					user_location: `${Number(center.lat)} , ${Number(center.lng)}`,
					store_id: Number(store_id),
				},
				(res) => {
					const response = res.data.data.data;

					setCharges(response.delivery_fees);
					setCheckoutDetails({
						...checkoutDetails,
						address: response.address[0],
					});

					setLoading(false);
					setShowMap(false);
				},
				(err) => {
					console.log(err);
					setLoading(false);

					ToastAlertError(
						err?.response?.data?.message
							? err?.response.data.message
							: "something went wrong"
					);
				}
			);
		} else {
			CoreHttpHandler.request(
				"orders",
				"getCordinates",
				{
					store_location: `${Number(center.lat)} , ${Number(center.lng)}`,
				},
				(res) => {
					const response = res.data.data.data;
					console.log(response, "else");
					setSellerData({
						...sellerData,
						location: response.address,
					});

					setLoading(false);
					setShowMap(false);
				},
				(err) => {
					console.log(err);
					setLoading(false);

					ToastAlertError(
						err?.response?.data?.message
							? err?.response.data.message
							: "something went wrong"
					);
				}
			);
		}
	};
	return isLoaded && showMap ? (
		<div style={{ position: "relative" }}>
			<div
				style={{
					height: "100vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					position: "fixed",
					opacity: "1",
					zIndex: "100",
					bottom: "0",
					backgroundColor: "#00000099",
				}}>
				<div
					ref={modal}
					style={{
						padding: "20px",
						height: "525px",
						borderRadius: "8px",
						backgroundColor: "black",
						border: " 1px solid rgba(57, 55, 55, 0.7882352941)",
						margin: "auto 20px",
					}}>
					<span
						style={{
							textAlign: "right",
							color: "white",
							marginBottom: "20px",
							cursor: "pointer",
						}}>
						<MdOutlineClose
							onClick={() => setShowMap(false)}
							size={22}
						/>
					</span>

					<GoogleMap
						style={{
							margin: "auto",
						}}
						mapContainerStyle={containerStyle}
						center={center}
						zoom={-12}
						onLoad={onLoad}
						onUnmount={onUnmount}
						onClick={(e) => {
							//	console.log(e.latLng.lat(), e.latLng.lng());
							setMarkers({
								lat: e.latLng.lat(),
								lng: e.latLng.lng(),
								time: new Date(),
							});
						}}>
						{/* Child components, such as markers, info windows, etc. */}
						<Autocomplete
							onLoad={(autocomplete) => {
								setSearch(autocomplete);
							}}
							onPlaceChanged={() => {
								if (search !== null) {
									const place = search?.getPlace();

									setCenter({
										lat: place.geometry.location.lat(),
										lng: place.geometry.location.lng(),
									});
								}
							}}>
							<input
								type='text'
								placeholder='Customized your placeholder'
								style={{
									boxSizing: `border-box`,
									border: `1px solid transparent`,
									width: `240px`,
									height: `32px`,
									padding: `0 12px`,
									borderRadius: `3px`,
									boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
									fontSize: `14px`,
									outline: `none`,
									textOverflow: `ellipses`,
									position: "absolute",
									left: "50%",
									marginLeft: "-120px",
								}}
							/>
						</Autocomplete>
						<Marker
							key={marker.time.toISOString()}
							position={{ lat: marker.lat, lng: marker.lng }}
						/>
					</GoogleMap>
					<LoadingButton
						style={{
							width: "40%",
							background: "#f3ac3b",
							fontSize: "13px",
							borderRadius: "6px",
							padding: "10px",
							float: "right",
							marginTop: "20px",
							outline: "none",
							border: "none",
							cursor: "pointer",
						}}
						onClick={handleAddress}
						loading={loading}
						text='Submit'
					/>
				</div>
			</div>
		</div>
	) : (
		<>loading...</>
	);
}

export default React.memo(MyComponent);
