import React from "react";
import MyPage from "./MyPage";
import Restaurant from "./Restaurant";
import { useState, useEffect, useParams } from "react";
import axios from "axios";

const RestaurantList = ({
	category,
	myRestaurant,
	onCreate,
	onRemove,
	onToggle,
}) => {
	const [restaurants, setRestaurants] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				if (category === "myPage") {
					setRestaurants(myRestaurant);
				} else {
					const response = await axios.get(
						`https://a02a6001-2421-4884-bdf5-0253413f4bb8.mock.pstmn.io/${category}`
					);
					// setRestaurants(sample);
					setRestaurants(response.data);
				}
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category, myRestaurant]);

	// 대기 중일 때
	if (loading) {
		return <div>대기 중…</div>;
	}
	// 아직 articles 값이 설정되지 않았을 때
	if (!restaurants) {
		return null;
	}

	if (category === "myPage") {
		return (
			<div>
				<MyPage
					myRestaurant={restaurants}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			</div>
		);
	}

	return (
		<div>
			{restaurants.map((r) => (
				<Restaurant
					key={r.id}
					id={r.id}
					name={r.name}
					category={r.category}
					onCreate={onCreate}
				/>
			))}
		</div>
	);
};
export default RestaurantList;
