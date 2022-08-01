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
	// const [loading, setLoading] = useState(false);

	const sample = [
		{
			id: 1,
			name: "촨커",
			category: "중식",
		},

		{
			id: 2,
			name: "돼랑이우랑이",
			category: "일식",
		},

		{
			id: 3,
			name: "고수찜닭",
			category: "한식",
		},

		{
			id: 4,
			name: "파치",
			category: "양식",
		},

		{
			id: 5,
			name: "치보",
			category: "양식",
		},

		{
			id: 6,
			name: "통일 부대찌개",
			category: "한식",
		},

		{
			id: 7,
			name: "이문동 커피집",
			category: "카페",
		},

		{
			id: 8,
			name: "물고기 김밥",
			category: "한식",
		},

		{
			id: 9,
			name: "코코니주방",
			category: "일식",
		},

		{
			id: 10,
			name: "미연 마라탕",
			category: "중식",
		},

		{
			id: 11,
			name: "할머니 보쌈",
			category: "한식",
		},

		{
			id: 12,
			name: "아일랜드비",
			category: "카페",
		},

		{
			id: 13,
			name: "베브릿지",
			category: "카페",
		},

		{
			id: 14,
			name: "마루기",
			category: "일식",
		},

		{
			id: 15,
			name: "아임파이",
			category: "카페",
		},

		{
			id: 16,
			name: "영화장",
			category: "중식",
		},

		{
			id: 17,
			name: "샤로스톤",
			category: "양식",
		},

		{
			id: 18,
			name: "아욱꽃",
			category: "양식",
		},

		{
			id: 19,
			name: "도란도란",
			category: "한식",
		},

		{
			id: 20,
			name: "모코모코",
			category: "일식",
		},

		{
			id: 21,
			name: "고기야 미안해",
			category: "일식",
		},

		{
			id: 22,
			name: "뉴올리언스 버거클럽",
			category: "양식",
		},

		{
			id: 23,
			name: "서울 뼈구이 매운족발",
			category: "한식",
		},

		{
			id: 24,
			name: "회기왕족발보쌈",
			category: "한식",
		},

		{
			id: 25,
			name: "사골 마라탕",
			category: "중식",
		},

		{
			id: 26,
			name: "홍곱창",
			category: "한식",
		},

		{
			id: 27,
			name: "양귀비",
			category: "카페",
		},

		{
			id: 28,
			name: "신보",
			category: "카페",
		},

		{
			id: 29,
			name: "밀플랜비",
			category: "양식",
		},

		{
			id: 30,
			name: "자연밥상",
			category: "한식",
		},
	];

	useEffect(() => {
		if (category === "마이페이지") {
			setRestaurants(myRestaurant);
		}
		if (category === "전체") {
			setRestaurants(sample);
		} else {
			setRestaurants(sample.filter((res) => res.category === category));
		}
	}, [category]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setLoading(true);
	// 		try {
	// 			if (category === "myPage") {
	// 				setRestaurants(myRestaurant);
	// 			} else {
	// 				const response = await axios.get(
	// 					`https://74868553-c1e0-4dd0-b231-b83833ce6744.mock.pstmn.io/${category}`
	// 				);
	// 				// setRestaurants(sample);
	// 				setRestaurants(response.data);
	// 			}
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 		setLoading(false);
	// 	};
	// 	fetchData();
	// }, [category, myRestaurant]);

	// 대기 중일 때
	// if (loading) {
	// 	return <div>대기 중…</div>;
	// }
	// 아직 restaurants 값이 설정되지 않았을 때
	if (!restaurants) {
		return null;
	}

	console.log(restaurants);

	if (category === "마이페이지") {
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
