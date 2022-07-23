import "./App.css";
import Categories from "./components/Categories";
import RestaurantList from "./components/RestaurantList";
import { useCallback, useState, useEffect } from "react";

function App() {
	const [category, setCategory] = useState("all");
	const onSelect = useCallback((category) => setCategory(category), []);
	const [myRestaurant, setMyRestaurant] = useState([]);

	// 마이 페이지에 음식점 추가
	const onCreate = (id, name, category) => {
		// 마이 페이지에 이미 있을 경우
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

	// 마이페이지에 음식점 삭제
	const onRemove = (id) => {
		const nextRes = myRestaurant.filter((r) => r.id !== id);
		setMyRestaurant(nextRes);
		alert("삭제되었습니다.");
	};

	// const onRemove   mypage에 음식점 삭제
	// const onToggle   mypage에 음식점 체크

	return (
		<div className="App">
			<Categories category={category} onSelect={onSelect} />
			<RestaurantList
				category={category}
				myRestaurant={myRestaurant}
				onCreate={onCreate}
				onRemove={onRemove}
			/>
		</div>
	);
}

export default App;
