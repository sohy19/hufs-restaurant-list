import React, { useCallback, useState, useParams } from "react";
import Categories from "./Categories";
import RestaurantList from "./RestaurantList";

const Home = () => {
	// const now = useParams().now;
	// // const now = match.params.now || "all";
	// console.log(now);

	const [category, setCategory] = useState("전체");
	const onSelect = useCallback((category) => setCategory(category), []);
	const [myRestaurant, setMyRestaurant] = useState([]);

	// myPage에 음식점 추가
	const onCreate = (id, name, category) => {
		// myPage에 이미 있을 경우
		if (myRestaurant.filter((r) => r.name.includes(name)).length > 0) {
			alert("중복된 값이 존재합니다.");
		} else {
			const new_restaurant = myRestaurant.concat({
				id: id,
				name: name,
				category: category,
				checked: false,
			});
			setMyRestaurant(new_restaurant);
			alert("추가되었습니다.");
		}
	};
	// ++ 포인터 바꾸기

	// myPage에 음식점 삭제
	const onRemove = (id) => {
		const nextRes = myRestaurant.filter((r) => r.id !== id);
		setMyRestaurant(nextRes);
		alert("삭제되었습니다.");
	};

	// myPage에 음식점 체크
	const onToggle = (id) => {
		const index = myRestaurant.findIndex((res) => res.id === id);
		const selected = myRestaurant[index];
		const nextRes = [...myRestaurant];
		nextRes[index] = {
			...selected,
			checked: !selected.checked,
		};
		setMyRestaurant(nextRes);
	};

	return (
		<>
			<Categories category={category} onSelect={onSelect} />
			<RestaurantList
				category={category}
				myRestaurant={myRestaurant}
				onCreate={onCreate}
				onRemove={onRemove}
				onToggle={onToggle}
			/>
		</>
	);
};

export default Home;
